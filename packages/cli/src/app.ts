const yeoman = require('yeoman-environment');

const Generator = require.resolve('./generators/app');
const env = yeoman.createEnv();
export default function(options) {
  env.register(Generator, 'ws:app');
  env.run('ws:app', { force: true });
}
