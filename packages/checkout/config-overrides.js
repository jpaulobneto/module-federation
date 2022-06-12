// const { addWebpackPlugin, override } = require("customize-cra")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = function override(config) {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "checkout",
      filename: "remoteEntry.js",
      exposes: {
        ".": "/src/components",
        "./AddToCart": "./src/components/AddToCart/AddToCart.js",
        "./Cart": "./src/components/Cart/Cart.js",
        "./CartProvider": "./src/components/Cart/CartProvider.js",
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
