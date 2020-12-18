const browserSync = require('browser-sync').create();

function serve() {
    browserSync.init({
        server: 'build',
        watch: true,
        notify: false
    });
}


exports.default = serve;