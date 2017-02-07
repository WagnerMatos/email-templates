/*
 * assemble-examples <https://github.com/assemble/assemble-examples>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    assemble: {
      options: {
        flatten: true,
        partials: ['templates/includes/*.hbs'],
        layoutdir: 'templates/layouts',
        layout: 'default.hbs'
      },
      site: {
        files: {'dest/html/': ['templates/*.hbs']}
      }
    },
    replace: {
      example: {
        src: ['dest/html/*.html'],
        dest: 'dest/html/',
        replacements: [
          {
            from: '{%',
            to: '<%'
          },
          {
            from: '%}',
            to: '%>'
          }          
        ]
      }
    },
    inlinecss: {
        basic: {
          options: {},
          files: [{
            expand: true,
            cwd: 'dest/html/',
            src: '**/*.html',
            dest: 'dest/html/'
          }]
        }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-inline-css');

  // The default task to run with the `grunt` command.
  grunt.registerTask('default', ['assemble','inlinecss','replace']);
};
