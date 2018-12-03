const shell = require('shelljs');

const outDirs = [
  'common',
  'index.js',
  'index.js.map',
];

shell.rm('-rf', '.nyc_output');
shell.rm('-rf', 'typings');

// REMOVE OUTPUT DIRECTORY
outDirs.forEach(dir => shell.rm('-rf', dir));
