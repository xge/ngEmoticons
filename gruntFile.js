module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: "dist/ng-emoticon.map"
            },
            target: {
                src: "ng-emoticons.js",
                dest: "dist/ng-emoticon.min.js"
            }
        },
        cssmin:{
        	minify:{
        		expand:true,
        		src:["ng-emoticons.css"],
        		dest:"dist/",
        		ext:".min.css"
        	}
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: false,
                laxbreak: true,
                undef: false,
                unused: true
            },
            target: {
                src: "ng-emoticons.js"
            }
        }
    });
    grunt.registerTask('default', ["jshint","uglify","cssmin"]);
};
