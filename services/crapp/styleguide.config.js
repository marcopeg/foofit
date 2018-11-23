const path = require('path')

module.exports = {
    webpackConfig: require('react-scripts-rewired/config/webpack.config.dev.extend'),
    components: 'src/components/**/*.jsx',
    context: {
        MobilePageStyleguidist: path.join(__dirname, 'src/components/MobilePage/lib/styleguidist.wrappers'),
    },
}
