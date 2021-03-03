'use strict'

// 用于编辑器识别别名

const path = require('path')

function resolve (dir){
    return path.join(__dirname,'.',dir)
}

module.exports = {
    context: path.resolve(__dirname,'./'),
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {
            '@':resolve('src')
        }
    }
}

