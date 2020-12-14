// module.exports = {
//     baseUrl: './',
//     assetsDir: 'static',
//     productionSourceMap: false,
// }

const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@service', resolve('src/service'))
            .set('@router', resolve('src/router'))
            .set('@views', resolve('src/views'))
            .set('@api', resolve('src/api'))
            .set('@utils', resolve('src/utils'))
    }
}