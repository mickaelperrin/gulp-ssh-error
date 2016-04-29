'use strict';

var gulp = require('gulp');
gulp.task('default', require('../gulp/ssh/ssh_tasks')(gulp));