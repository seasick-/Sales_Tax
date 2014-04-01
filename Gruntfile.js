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
        src: ['css/*.css', '*.html', 'images/**/*', 'lib/**/*' ],
        dest: 'build/',
        flatten: false,
        filter: 'isFile'
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
        // tasks:['mochacov:unit'] ///original line
        tasks:['test:acceptance']
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
          'test/acceptance/casper-results.xml' : ['test/acceptance/home_page_test.js']
        }
      }
    },
    concurrent: {
      buildDev: ['browserify:dev']
    },
  });

  grunt.registerTask('build:dev', ['clean:dev', 'concurrent:buildDev', 'copy:dev']);
  grunt.registerTask('build:prod', ['clean:prod', 'browserify:prod', 'jshint:all', 'copy:prod']);
  grunt.registerTask('test', ['env:test', 'mochacov:unit', 'mochacov:coverage','test:acceptance']);
  grunt.registerTask('travis', ['mochacov:unit', 'mochacov:coverage', 'test:acceptance', 'mochacov:coveralls']);
  grunt.registerTask('server', [ 'env:dev', 'build:dev', 'express:dev', 'watch:express' ]);
  grunt.registerTask('test:acceptance',['build:dev', 'express:dev', 'casper']);
  grunt.registerTask('default', ['test','watch:express']);

  grunt.option('force', true);
};
