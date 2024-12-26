import { KnipConfig } from 'knip'

const knipConfig: KnipConfig = {
  ignore: ['eslint.config.js'],
  ignoreDependencies: ['@repo/eslint-config'],
}

export default knipConfig
