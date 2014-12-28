'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var polyfer = require('./');
var fs = require('fs');

it('should run polyfer post processor through vinyl', function (cb) {
	var stream = polyfer();

	stream.on('data', function (file) {
		assert.strictEqual(file.contents.toString().trim(), fs.readFileSync('./expected.css', 'utf-8').trim());
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + '/fixture.css',
		contents: fs.readFileSync('./fixture.css')
	}));

	stream.end();
});
