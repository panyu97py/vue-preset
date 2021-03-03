module.exports = api => {
    api.extendPackage({
        dependencies: {
            'axios': '^0.21.1',
            'element-ui': '^2.4.5',
            'vue-router': '^3.0.6',
            'vuex': '^3.1.1'
        },
        devDependencies:{
            "node-sass": "^4.12.0",
            "sass": "^1.32.0",
            "sass-loader": "^8.0.0"
        }
    })
    api.render('../template')
}
