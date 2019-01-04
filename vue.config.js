module.exports = {
    productionSourceMap: true,
    devServer: {
        port: 8080,
        proxy: {
            '/api' : {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api' : ''
                }
            }
        }
    }
}