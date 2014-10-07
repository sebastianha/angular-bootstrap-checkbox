'use_strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        commit: false,
        push: false,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'bower.json']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: {
        files: {
          src: ['src/**/*.js', 'test/**/*.js']
        },
      }
    },
    ngtemplates: {
      glyphicon: {
        src:      'src/*-glyphicon-tpl.html',
        dest:     'dist/angular-bootstrap-checkbox-glyphicon-tpl.js',
        options: {
          module: 'ui.checkbox',
          url: function(url) { return url.replace('src/', '').replace('-glyphicon', ''); }
        }
      },
      fontawesome: {
        src:      'src/*-fontawesome-tpl.html',
        dest:     'dist/angular-bootstrap-checkbox-fontawesome-tpl.js',
        options: {
          module: 'ui.checkbox',
          url: function(url) { return url.replace('src/', '').replace('-fontawesome', ''); }
        }
      }
    },
    uglify: {
      options: {
        mangle: true,
        compile: true,
        compress: true
      },
      dist: {
        files: {
          'dist/angular-bootstrap-checkbox.min.js': ['src/**/*.js']
        }
      }
    },
    watch: {
      all: {
        files: ['Gruntfile.js', 'src/*.js'],
        tasks: ['default'],
        options: {
          livereload: 1676,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('default', ['jshint', 'ngtemplates', 'uglify']);
};