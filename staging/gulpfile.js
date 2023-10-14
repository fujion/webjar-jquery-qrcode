const {src, dest, series} = require('gulp');
const minifyJS = require('gulp-minify');

const srcDir = '${webjar.staging}/';
const destDir = '${webjar.target}/';

function task1() {
    return _minifyJS('jquery.qrcode.js', 'dist')
}

function _toSrc(_src) {
    return src(_src, {allowEmpty: false, cwd: srcDir});
}

function _toDest(_dest) {
    return dest(_dest || '.', {cwd: destDir});
}

function _minifyJS(_src, _dest) {
    console.log('  Minifying ' + _src);
    return _toSrc(_src)
        .pipe(_toDest(_dest))
        .pipe(minifyJS(
            {
                noSource: true,
                ext: {
                    min: '.min.js'
                }
            }))
        .pipe(_toDest(_dest))
}

exports.default = task1;
