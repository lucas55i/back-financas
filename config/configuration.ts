const envs = {
  production: '.env.prod',
  development: '.env.dev',
};

const getEnvironmentFile = (): string => {
  if (process.env.NODE_ENV == undefined) {
    process.env.NODE_ENV = 'production';
  }
  console.debug(`"NODE_ENV" is set to "${process.env.NODE_ENV}"`);
  return envs[process.env.NODE_ENV];
};

export { getEnvironmentFile };
