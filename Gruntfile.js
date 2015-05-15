module.exports = function(grunt){

	// Project configuration.
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file 
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: ['test/**/*.js']
      }
    },
    copy: {
  		main: {
    		files: [
      			// includes files within path 
      			{expand: true, src: ['src/*'], dest: 'dest/', filter: 'isFile'},
      			],
      		},
      	},
	watch: {
      src: {
        files: ['**'],
        tasks: ['copy']
    	},
    },
	});

	// Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');


  // Default task(s).
  grunt.registerTask('default', ['mochaTest','copy']);

}


