const { ModuleFederationPlugin } = require("webpack").container

module.exports = function override(config) {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "product",
      filename: "remoteEntry.js",
      remotes: {
        checkout: "checkout@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.1.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.1.0",
        },
      },
    })
  )

  if (!config.output) {
    config.output = {}
  }

  config.output.publicPath = "auto"
  return config
}
