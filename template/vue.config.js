module.exports = {
    // 开发服务器 webpack-dev-server
    devServer: {
        // 代理配置
        proxy: {
            // 匹配请求地址 /api
            '/api': {
                // 目标域名
                target: '<url>',
                // 是否开启 websocket 代理
                ws: true,
                // 是否开启 http 请求代理
                changeOrigin: true,
                // 请求路径重写
                pathRewrite: {
                    // 正则匹配请求路径替换后由 devServer 发起请求
                    '^/api/old-path': '/api/new-path',
                }
            },
        }
    },
    css: {
        loaderOptions: {
            // sass loader 配置项
            scss: {
                // 配置scss 全局变量
                prependData: `@import "~@/styles/variables.scss";\n@import "~@/styles/mixins.scss";`
            }
        }
    }
}
