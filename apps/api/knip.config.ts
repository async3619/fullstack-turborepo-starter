import { KnipConfig } from 'knip'

const knipConfig: KnipConfig = {
  entry: ['./src/main.ts', './test/**/*.ts'],
  ignore: ['eslint.config.js'],
  ignoreDependencies: [
    '@repo/eslint-config',
    '@types/express',
    '@types/supertest',
    'lint-staged',
    'supertest',
    'prisma-nestjs-graphql',
    'source-map-support',
    'ts-loader',
    'ts-node',
    'tsconfig-paths',
  ],
  ignoreBinaries: ['eslint', 'prettier'],
}

export default knipConfig
