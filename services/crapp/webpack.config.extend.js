/**
 * Project's customized Webpack Configuration Extension
 * ----------------------------------------------------
 *
 * this file is heavily inspired by `react-app-rewired` mechanism.
 *
 * it simply gives you the chance to hook into the default Webpack
 * configuration as it is provided by `create-react-app`, and to
 * change it so to match your project's needs.
 *
 * If you want to check out the default values look into:
 * `./node_modules/marcopeg-react-scripts/config/webpack.config.${env}.js`
 *
 */

const { webpackReactLoadable } = require('create-react-app-ssr/lib/webpack-react-loadable')

module.exports = (config, env, { paths }) => {
    // here you can extend your webpackConfig at will
    // if (env === 'productio')
    config = webpackReactLoadable(config)
    return config
}
