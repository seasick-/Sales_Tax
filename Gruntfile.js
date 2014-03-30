'use strict';

process.env.PHANTOMJS_EXECUTABLE = process.env.PHANTOMJS_EXECUTABLE || '/usr/local/opt/nvm/v0.10.26/bin/phantomjs';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-casper');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-mongoimport');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-mongo-drop');
  grunt.loadNpmTasks('grunt-mocha-cov');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-arialinter');
  grunt.loadNpmTasks('grunt-node-inspector');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    env: {
      options: {
      },
      dev: {
        NODE_ENV: 'development'
      },
      test: {
        NODE_ENV: 'test'
      }
    },

    clean: {
      build: ['build'],
      dev: {
        src: ['build/**/*']
      },
      prod: ['dist']
    },

    copy: {
      prod: {
        expand: true,
        cwd: 'app/assets',
        src: ['css/*.css', '*.html', 'images/**/*' ],
        dest: 'dist/',
        flatten: false,
        filter: 'isFile'
      },
      dev: {
        expand: true,
        cwd: 'app/assets',
        src: ['css/*.css', '*.html', 'images/**/*' ],
        dest: 'build/',
        flatten: false,
        filter: 'isFile'
      }
    },

    arialinter: {
      files: [
        './app/assets/*.html',
        './app/assets/templates/*.hbs'
      ],
      options: {
        templates: true,
        levels: 'A'
      }
    },

    browserify: {
      prod: {
        src: ['app/assets/js/*.js'],
        dest: 'dist/browser.js',
        options: {
          transform: ['debowerify','hbsfy'],
          debug: false
        }
      },
      dev: {
        src: ['app/assets/js/*.js'],
        dest: 'build/browser.js',
        options: {
          transform: ['debowerify','hbsfy'],
          debug: true
        }
      }
    },

    notify: {
      server: {
        options: {
          message: 'Server is ready'
        }
      },
      express: {
        options: {
          message: 'express is ready'
        }
      },
      watch: {
        options: {
          message: 'watch'
        }
      }
    },

    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'server.js',
          node_env: 'development'
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js',
          node_env: 'test'
        }
      }
    },
    simplemocha: {
      test:{
        src:['test/*_test.js','!test/acceptance/*_test.js'],
        options:{
          reporter: 'spec',
          slow: 200,
          timeout: 1000,
          node_env: 'test'
        }
      }
    },

    mochacov: {
      coverage: {
        options: {
          reporter: 'mocha-term-cov-reporter',
          coverage: true
        }
      },
      coveralls: {
        options: {
          coveralls: {
            serviceName: 'travis-ci'
          }
        }
      },
      unit: {
        options: {
          reporter: 'spec',
          require: ['chai']
        }
      },
      html: {
        options: {
          reporter: 'html-cov',
          require: ['chai']
        }
      },
      options: {
        files: 'test/*_test.js',
        ui: 'bdd',
        colors: true
      }
    },

    watch: {
      all: {
        files:['server.js', './**/*.js' ],
        tasks:['jshint']
      },
      test: {
        files: ['test/**/*'],
        tasks:['mochacov:unit']
      },
      express: {
        files:  [ 'server.js','api/**/*','app/assets/**/*','app/*.js' ],
        // tasks:  [ 'clean', 'copy', 'sass:dev', 'browserify:dev', 'express:dev' ],
        tasks:  [ 'build:dev'],
        options: {
          // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions.
          // Without this option specified express won't be reloaded
          spawn: false,
          livereload: true
        }
      }
    },
    casper: {
      acceptance : {
        options : {
          test : true,
          //'log-level': 'debug'
        },
        files : {
          'test/acceptance/casper-results.xml' : ['test/acceptance/*_test.js']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'server.js', 'api/**/*.js', 'app/assets**/*.js', 'test/Book_test.js', 'test/Book.js'],
      options: {
        jshintrc: true
      }
    },
    sass: {
      dist: {
        files: {'build/css/styles.css': 'app/assets/scss/styles.scss'}
      },
      dev: {
        options: {
          includePaths: ['app/assets/scss/'],
          sourceComments: 'map'
        },
        files: {'build/css/styles.css': 'app/assets/scss/styles.scss'}
      }
    },
    mongoimport: {
      options: {
        db : 'oaa-test',
        //optional
        //host : 'localhost',
        //port: '27017',
        //username : 'username',
        //password : 'password',
        //stopOnError : false,
        collections : [
          {
            name : 'users',
            type : 'json',
            file : 'db/seeds/users.json',
            jsonArray : true,  //optional
            upsert : true,  //optional
            drop : true  //optional
          },
          {
            name : 'meetings',
            type :'json',
            file : 'db/seeds/meetings.json',
            jsonArray : true,
            upsert : true,
            drop : true
          }
        ]
      }
    },
    concurrent: {
      // buildDev: ['sass:dev', 'browserify:dev', 'jshint:all']
      buildDev: ['sass:dev', 'browserify:dev']
    },
    mongo_drop: {
      test: {
        'uri' : 'mongodb://localhost/oaa-test'
      }
    },
    'node-inspector': {
      dev: {}
    },
  });

  grunt.registerTask('build:dev', ['clean:dev', 'concurrent:buildDev', 'copy:dev']);
  grunt.registerTask('build:prod', ['clean:prod', 'browserify:prod', 'jshint:all', 'copy:prod']);
  grunt.registerTask('test:prepare', ['mongo_drop', 'mongoimport']);
  grunt.registerTask('test', ['env:test', 'mochacov:unit','mochacov:coverage']);
  grunt.registerTask('test1', ['env:test', 'mochacov:unit','watch:test']);
  grunt.registerTask('travis', ['jshint', 'mochacov:unit', 'mochacov:coverage', 'mochacov:coveralls']);
  grunt.registerTask('server', [ 'env:dev', 'build:dev', 'express:dev', 'watch:express', 'notify' ]);
  grunt.registerTask('test:acceptance',['build:dev', 'express:dev', 'casper']);
  grunt.registerTask('default', ['jshint', 'test','watch:express']);

};
