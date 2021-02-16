let project_folder = "dist";

let source_folder = "#src";

let path = {

    build: {
        html: project_folder + '/' ,
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        fonts: project_folder + '/fonts/',
        svg: project_folder + '/img/svg/'
    },

    src: {
        html: [source_folder + '/*.html', '!' +  source_folder + '/_*.html'] ,
        css: source_folder + '/scss/style.scss',
        js: source_folder + '/js/script.js',
        img: source_folder + '/img/**/*.{jpg, gif,png, ico, webp}',
        fonts: source_folder + '/fonts/*.ttf',
        svg: source_folder + '/img/svg/*.*'
    },

    watch: {
        html: source_folder + '/**/*.html' ,
        css: source_folder + '/scss/**/*.scss',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg, png, gif, ico, webp}',
    },

    clean: './' + project_folder + '/'

}


let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create();           /*Виртуалка*/
    fileinclude = require('gulp-file-include');             /*HTML препроцессор*/
    del = require('del');                                   /*удалет из Dist старые файлы*/
    scss = require('gulp-sass');                           /*SCSS*/
    autoprefixer = require('gulp-autoprefixer');           /* добавляет аутопрефиксы*/
    group_media = require('gulp-group-css-media-queries'); /*чекает весь CSS на наличие media -> вырезает в конец*/
    clean_css = require('gulp-clean-css');       /*оптимизация, минимизация CSS*/
    rename = require('gulp-rename');            /*переименование файлов, для дублирования*/
    uglify = require('gulp-uglify-es').default; /*минимизация JS*/
    imagemin = require('gulp-imagemin');   /* минимизация img*/
    webp = require('gulp-webp');           /*переконвертирование в WEBP*/
    webphtml = require('gulp-webp-html');  /*автоматическая вставка WEBP*/







   /* Виртуалка*/
function browserSync(params){
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        },
        port: 3000,
        notify: false
    })
}

/*Html дефолтная функция*/
function html (){
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}



/*CSS дефолтная функция*/
function css (){
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
        )
        .pipe(group_media())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true
        }))
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())

}




/*JS дефолтная функция*/
function js (){
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}



/*IMG дефолтная функция*/
function images (){
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}



function svg (){
return src(path.src.svg)
    .pipe(dest(path.build.svg))
    .pipe(browsersync.stream())
}







function watchFiles (){
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.js], images)
}



function clean(){
    return del(path.clean)
}




let build = gulp.series(clean, gulp.parallel(js, images, svg,  css, html))
let watch =  gulp.parallel(build, watchFiles, browserSync);


/*Подключаем методы к Gulp*/
exports.svg = svg;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
