module.exports = {
    productionSourceMap: true,
    devServer: {
        port: 8080,
        proxy: {
            '/api' : {
                target: 'http://localhost:8090/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api' : ''
                }
            }
        }
    }
}