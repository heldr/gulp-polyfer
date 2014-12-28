'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var polyfer = require('polyfer');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-polyfer', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(polyfer(file.contents.toString()));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-polyfer', err));
		}

		cb();
	});
};
