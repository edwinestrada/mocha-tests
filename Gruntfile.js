module.exports = function(grunt) {
  var banner = '/*\n<%= pkg.name %>\n<%= pkg.version %> - <%= pkg.description %>';
  banner += '\nBuilt on <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/*.js'],
      options: {
        maxlen: 100,
        quotmark: 'single'
      }
    },
    concat: {
      options: {
        separator: '\n',
        banner: banner
      },
      build: {
        files: [{
          src: ['src/*.js'],
          dest: 'build/<%= pkg.name %>.js'
        }]
      }
    },
    simplemocha: {
      options: {
        globals: ['expect'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'nyan'
      },
      all: { src: ['test/*.js', 'test/*.coffee'] }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'src/*.js', 'test/**/*.js', 'test/**/*.coffee'],
        tasks: ['development']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('development', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['jshint', 'simplemocha', 'concat']);
};
