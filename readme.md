# gulp-polyfer [![Build Status](https://travis-ci.org/heldr/gulp-polyfer.svg?branch=master)](https://travis-ci.org/heldr/gulp-polyfer)

> Gulp plugin to post process Polymer CSS polyfills with [Polyfer][npm-url]


## Install

```sh
$ npm install --save-dev gulp-polyfer
```


## Usage

```js
var gulp = require('gulp');
var polyfer = require('gulp-polyfer');

gulp.task('default', function () {
	return gulp.src('src/file.css')
		.pipe(polyfer())
		.pipe(gulp.dest('dist'));
});
```

## License

MIT © [Helder Santana](https://github.com/heldr)

[npm-url]: https://npmjs.org/package/polyfer
