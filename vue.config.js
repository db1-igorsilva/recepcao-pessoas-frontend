module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '^/recepcao-pessoas-frontend': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
            },
        },
    },
};