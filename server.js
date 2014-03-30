'use strict';

function startServer() {
  // Initialize 'newrelic' if a license key is present
  if (process.env.NEWRELIC_LICENSE_KEY !== null &&
     process.env.NEWRELIC_LICENSE_KEY !== undefined) {
    // 'newrelic' module should never be able to crash the server
    try {
      require('newrelic');
    }
    catch (error) {
      console.warn('New Relic has crashed on initialization.\n\n' + error.stack);
    }
  }

  var express  = require('express');
  var app      = express();
  var http     = require('http');
  var path     = require('path');
  var port     = process.env.PORT || 3000;
  var mongoose = require('mongoose');

  app.configure(function() {
    app.use(express.json());
    app.use(express.cookieParser());
    app.use(express.static(path.join(__dirname, 'build')));
    var RedisStore = require('connect-redis')(express);
    // example of options
    // var redisOptions = { db: 'sessions', post: 6379, host: '127.0.0.1' };

    // session secret TODO move to node-foreman's .env / process.env
    var session_secret = process.env.OAA_SESSION_SECRET || 'CHANGEMECHANGEMECHANGEMECHANGEME';
    app.use(express.session({ store: new RedisStore(), secret: session_secret }));
  });

  app.configure('development', function() {
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
    mongoose.connect('mongodb://localhost/oaa-development');
  });

  app.configure('test', function() {
    mongoose.connect('mongodb://localhost/oaa-test');
  });

  var server = http.createServer(app);

  server.listen(port, function(){
    console.log('Running on port ' + port);
  });
}

if (process.env.CLUSTER === 'true') {
  var numCPUs = parseInt(process.env.NUM_CHILDREN) || require('os').cpus().length;
  var cluster = require('cluster');
  var worker;

  if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
      worker = cluster.fork();
      console.log('Worker ', worker.process.pid, ' has spawned.');
    }

    cluster.on('exit', function(worker, code, signal) {
      console.log('worker ', worker.process.pid, ' has died a horrible, slow death.', code, signal);
      cluster.fork();
    });

  // Child processes will execute this
  } else {
    console.log('Starting web server on', process.pid);
    startServer();
  }
} else {
  startServer();
}
