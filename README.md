# grunt-vlc-libs
Grunt task to download FFMPEG Libs


## Install

```
$ npm install --save-dev grunt-ffmpeg-libs
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

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

grunt.registerTask('default', ['ffmpeg_libs']);
```
