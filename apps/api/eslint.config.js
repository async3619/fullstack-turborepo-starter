module.export = import('@repo/eslint-config/node-js').then(
  (module) => module.nodeJsConfig,
)
