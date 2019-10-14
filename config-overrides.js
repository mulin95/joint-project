const path = require("path");
const {
  override,
  fixBabelImports,	  // babel按需加载
  addWebpackAlias,	  // 别名
  addDecoratorsLegacy,// 配置装饰器
  // addBabelPlugins,    // bable配置
} = require("customize-cra");

module.exports = override(
  // ...addBabelPlugins(
  //   配置bable
  // ),

  addDecoratorsLegacy(),

  addWebpackAlias({	// 配置别名
    ['assets']: path.resolve(__dirname, 'src/assets'),
    ['components']: path.resolve(__dirname, 'src/components'),
    ["pages"]: path.resolve(__dirname, "src/pages"),
    ['utils']: path.resolve(__dirname, 'src/utils'),
    
    ['styles']: path.resolve(__dirname, 'src/assets/styles'),
    ['images']: path.resolve(__dirname, 'src/assets/images'),
    ['cmcimg']: path.resolve(__dirname, 'src/assets/communicateImages'),
    ['prcimg']: path.resolve(__dirname, 'src/assets/practiceImages'),
    ["styled"]: path.resolve(__dirname, "src/components/styled"),
    ['loginImages']: path.resolve(__dirname, 'src/assets/loginImages'),
  }),

  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

)