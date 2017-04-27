module.exports = function(grunt) {
  grunt.initConfig({
    babel: {
      options: {
        plugins: ['transform-react-jsx'], // npm install babel-plugin-transform-react-jsx
        presets: ['es2015', 'react'] // npm install babel-preset-es2015 babel-preset-react
      },
      dist: {
        files: [
          {
            "expand": true,
            "cwd": "src/js",
            "src": ["**/*.jsx"],
            "dest": "src/js-compiled/",
            "ext": "-compiled.js"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', ['babel']);
};
