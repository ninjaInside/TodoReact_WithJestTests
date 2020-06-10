let {src, dest, watch} = require('gulp')
let pug = require('gulp-pug')
let path = require('path')

let paths = {
	templates: {
		src: path.join(__dirname, 'src/views/pages/*'),
		our: path.join(__dirname, 'src/views/**/*'),
		from: path.join(__dirname, 'dist/views')
	}
}

function pugTemplates() {
	return src(paths.templates.src)
		.pipe(pug({pretty: '\t'}))
		.pipe(dest(paths.templates.from))
}

function watching() {
	watch(paths.templates.our, pugTemplates)
}

exports.default = watching