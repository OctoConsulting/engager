var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var path = require('path');
var browserify = require('browserify');
var babel = require ('babelify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var es2015 = require('babel-preset-es2015');
var react = require('babel-preset-react');
var watchify = require('watchify');
var assign = require('object-assign');

var gutil = require('gulp-util');
var babelify = require('babelify');
var clean = require('gulp-clean');
var notify = require("gulp-notify");
var notifier = require('node-notifier');
var uglify = require("gulp-uglify");
var gulpif = require('gulp-if');
var envify = require('envify')
var envifyC = require('envify/custom')
var env = require('gulp-env');

var customOpts = {
  entries: ['./Client/app.jsx'],
  debug: true
};

var path = {
    DEST_BUILD: './public/Assets/build',
};

var jsFiles = ['*.js', 'Server/src/**/*.js'];
var cssFile = ['*.css'];
var opts = assign({}, watchify.args, customOpts);

var uiFiles = jsFiles.concat(cssFile);
gulp.task('style', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }));
});

gulp.task('inject', function() {

    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./public/Assets/css/*.css', './public/Assets/js/*.js', './Client/app.jsx', './public/build/bundle.js', './public/build/bundle.js.map'], {
      read: false
    });
    var injectOptions = {
        ignorePath: '/public'
    };
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/Assets/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./Client/layouts/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./Client/layouts'));
});

//number of times scripts have gotten built
var scriptsCount = 0;

// External dependencies
var dependencies = [
      'react',
      'react-dom'
];

function bundleApp(isProduction, watch) {
    scriptsCount++;
    // If it's not for production, a separate vendors.js file will be created
    // the first time gulp is run so that we don't have to rebundle things like
    // react everytime there's a change in the js file
    if (scriptsCount === 1) {
        // create vendors.js for dev environment.
        browserify({
            require: dependencies,
            debug: true
        })
        .transform("babelify", { presets: ["es2015", "react"] })
        .transform(envify())
            .bundle()
            .on('error', gutil.log)
            .pipe(source('vendors.js'))
        .pipe(buffer())
        .pipe(gulpif(isProduction, uglify()))
            .pipe(gulp.dest(path.DEST_BUILD));
    }



    var appBundler = null;
    var nodeEnv = isProduction ? "production" : "development";
    var envs = env({ vars: { NODE_ENV: nodeEnv } });

    var bundle = function () {
        gutil.log("bundling...");
        appBundler
          .bundle()
        .on('error', function (err) {
            // print the error (can replace with gulp-util)
            console.log("bundle failed: " + err.message);
            notifier.notify({ title: "build failed", message: "check console", sound: "Basso" });
            // end this stream
            this.emit('end');
        })
        .on('log', gutil.log)
        .on('end', function () { gutil.log("ready..."); })
          .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(isProduction, uglify()))
          .pipe(gulp.dest(path.DEST_BUILD))
        .pipe(notify({ title: "build success!", message: "good job", sound: "Hero", onLast: true }));
    };

    var opts = {
        entries: './Client/app.jsx',
        debug: true
    };

    if (watch) {
        console.log("we're watching...");
        opts = assign({}, watchify.args, opts);
        appBundler = watchify(browserify(opts));
        appBundler.on('update', bundle);
    } else {
        appBundler = browserify(opts);
    }

    appBundler
            // transform ES6 and JSX to ES5 with babelify
        .transform("babelify", { presets: ["es2015", "react"] })
        .transform(envifyC({ NODE_ENV: nodeEnv }));

    // make deps external as we're including vendors.js in layout anyway
    dependencies.forEach(function (dep) {
        appBundler.external(dep);
    });
    console.log("about to bundle");
    bundle();


}

gulp.task('js', function()  {
  bundleApp(false, false);
});

gulp.task('watch', function()  {
  // gulp.watch('./public/Assets/css/**/*.scss', ['sass']);
  bundleApp(false, true);
});

var serve = function(){
  var options = {
      script: './index.js',
      delayTime: 1,
      env: {
          'PORT': 3000
      },
      watch: uiFiles
  };
  return nodemon(options).on('restart', function() {
      console.log('Restarting...');
  });
};

var clientSource = './Client',
    clientDestination = './Client';

gulp.task('clientWatch', function()  {
  gulp.src([(clientSource + '/**/*.js'), '!' + clientSource + '/node_modules/**'], {base: clientSource})
    .pipe(watch(clientSource, {base: clientSource}))
    .pipe(gulp.dest(clientDestination));
});

gulp.task('default', ['style', 'clientWatch', 'watch'], function (){
  serve();
});

gulp.task('predeploy', ['style', 'js', 'clientWatch']);

gulp.task('serve', [], function (){
  serve();
});
