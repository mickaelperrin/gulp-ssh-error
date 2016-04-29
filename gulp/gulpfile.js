'use strict';

var gulp = require('gulp');
gulp.task('default', require('./ssh/ssh_tasks')(gulp));

