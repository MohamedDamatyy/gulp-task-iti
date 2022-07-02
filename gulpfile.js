const {src, dest} = require('gulp')
const htmlMin = require('gulp-htmlmin')
const concat = require('gulp-concat')
const cssMin = require('gulp-clean-css')
const terser = require('gulp-terser')
const imagemin = require('gulp-imagemin');
// html
function htmlTask(){    
return src('project/*.html')
.pipe(htmlMin({collapseWhitespace:true,removeComments:true}))
.pipe(dest("dist"))   
}
exports.html = htmlTask

//////////////////////////////////////////////////////////////

// css 
function cssTask(){
    return src('project/css/**/*.css').pipe(concat("style.min.css"))
    .pipe(cssMin()).pipe(dest("dist/assets/css"))
}
exports.css = cssTask

/////////////////////////////////////////////////////////////

//js
function jsTask(){
    return src("project/js/**/*.js").pipe(concat("script.min.js"))
    .pipe(terser())
    .pipe(dest("dist/assets/js"))
}
exports.js = jsTask

////////////////////////////////////////////////////////////////

//images
function imgMinify() {
    return gulp.src('project/pics/*')
        .pipe(imagemin())
        .pipe(dest('dist/assets/images'));
}
exports.img = imgMinify