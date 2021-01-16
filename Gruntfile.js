module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      express: {
        files:  [ '**/*.js' ],
        tasks:  [ 'express:prod' ],
        options: {
          spawn: false
        }
    }},
    express: {
      options: {
        background: true,
        fallback: function () {
          console.log('server failed');
        },
        port: 3003,
        delay: 0,
      },
      prod: {
        options: {
          script: './server/index.js',
          node_env: 'production'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', [ 'express:prod','watch'])
}