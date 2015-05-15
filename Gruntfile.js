module.exports = function(grunt){

	// Project configuration.
  grunt.initConfig({
    
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


  // Default task(s).
  grunt.registerTask('default', ['copy','watch']);

}


