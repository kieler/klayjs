module.exports = function(grunt) {
    grunt.initConfig({
        config: {
            baseurl: 'http://rtsys.informatik.uni-kiel.de/~kieler/files/',
            folder: 'nightly/klayjs/',
            file: 'klay_layered_js_plainjslinker_nightly_latest.zip'
        },
        curl: {
            'get-klayjs': {
                src: '<%= config.baseurl %><%= config.folder %><%= config.file%>',
                dest: '<%= config.file %>'
            }
        },
        unzip: {
            'klay': '<%= config.file %>'
        },
        rename: {
            options: {
                ignore: true
            },
            moveThis: {
                src: 'klay/klay.js',
                dest: 'klay.js'
            }
        },
        clean: {
            klay_package: '<%= config.file %>',
            temp_dir: 'klay'
        }
    });
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-rename');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['curl', 'unzip', 'rename', 'clean']);
};