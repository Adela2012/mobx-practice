const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy
} = require("customize-cra");

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const customize = () => (config, env) => {
  config.resolve.alias['@'] = resolve('src');
  if (env === 'production') {
    config.externals = {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
  }
  return config
};

module.exports = override(
  fixBabelImports("import", {
    // antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "red",
      "@border-color-base": "green",
      "@link-color": "orange"
    }
  }),
  addDecoratorsLegacy(), //配置装饰器
  customize()
);
