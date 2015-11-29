module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        ffmpeg_libs: {
            options: {
                dir: 'FFMPEG', // Output dir
                force: true, // Overwrite 
                arch: 'ia32', // ia32 / x64 
                platform: 'win' // win / osx 
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['ffmpeg_libs']);
};