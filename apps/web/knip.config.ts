import { KnipConfig } from 'knip'

const knipConfig: KnipConfig = {
  ignore: ['eslint.config.js'],
  ignoreDependencies: ['@repo/eslint-config', 'lint-staged'],
  ignoreBinaries: ['eslint'],
}

export default knipConfig
