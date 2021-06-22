const yeoman = require('yeoman-environment');

const Generator = require.resolve('./generators/component');
const env = yeoman.createEnv();
export default function(options) {
  env.register(Generator, 'ws:component');
  env.run('ws:component');
}
