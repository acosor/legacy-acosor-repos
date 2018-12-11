const shell = require('shelljs');

const outDirs = [
  'common',
  'payloads',
  'Actions.js',
  'Actions.js.map',
  'ActionUtility.js',
  'ActionUtility.js.map',
  'IActions.js',
  'IActions.js.map',
  'index.js',
  'index.js.map',
  'ModularNames.js',
  'ModularNames.js.map',
];

shell.rm('-rf', '.nyc_output');
shell.rm('-rf', 'typings');

// REMOVE OUTPUT DIRECTORY
outDirs.forEach(dir => shell.rm('-rf', dir));
