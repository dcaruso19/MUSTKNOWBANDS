module.exports = function(grunt) {

   grunt.initConfig({
       sass: {
           dist: {
               files: {
                   'assets/components/foundation/css/foundation.css': 'assets/components/foundation/scss/foundation_custom.scss',
                   'assets/components/foundation/css/normalize.css': 'assets/components/foundation/scss/normalize.scss'
               }
           }
       }
   });

   grunt.loadNpmTasks('grunt-contrib-sass');

   grunt.registerTask('default', ['sass']);

};
