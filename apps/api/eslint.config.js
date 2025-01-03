// eslint-disable-next-line unicorn/prefer-module,no-undef
module.exports = import('@repo/eslint-config/node-js').then((mod) => [
  ...mod.nodeJsConfig,
  {
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@nestjs/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@repo/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/__generated__/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/prisma/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/log/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
])
