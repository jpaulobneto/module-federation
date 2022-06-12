const { addWebpackPlugin, override } = require("customize-cra")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = override(
  addWebpackPlugin(
    new ModuleFederationPlugin({
      name: "host",
    })
  )
)
