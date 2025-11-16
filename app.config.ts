type EnvName = 'development' | 'preview' | 'production'

interface EnvironmentConfig {
  api: string
  timeout: number
}

const buildEnv = (): { environment: EnvName } => {
  const env_string = process.env.APP_ENV || 'development'
  let environment: EnvName = 'development'

  if (env_string.includes('production')) {
    environment = 'production'
  } else if (env_string.includes('preview')) {
    environment = 'preview'
  }

  return { environment }
}

const environments: Record<EnvName, EnvironmentConfig> = {
  development: {
    api: 'http://localhost:3003/api/v1/',
    timeout: 10000,
  },
  preview: {
    api: 'https://preview.appyhourcle.com/api/v1',
    timeout: 10000,
  },
  production: {
    api: 'https://appyhourcle.com/api/v1',
    timeout: 10000,
  },
}


module.exports = ({ config }: { config: object }) => {
  const environment: EnvName = buildEnv().environment;

  return {
    ...config,
    ...environments[environment],
  }
}