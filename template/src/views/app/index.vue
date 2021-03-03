<template>
    <layoutView :sideBarOptions="sideBarOptions">
        <router-view/>
    </layoutView>
</template>
<script>
    import layoutView from '@/components/layoutView'

    const APP_ROUTE_NAME = 'app'
    export default {
        components: {
            layoutView
        },
        computed: {
            routeMap() {
                const tempObj = {}
                this.$router.options.routes
                const getRoute = (routes) => {
                    routes.map(route => {
                        const {name, children} = route
                        if (name) {
                            tempObj[name] = route
                        }
                        if (children) {
                            getRoute(children)
                        }
                    })
                }
                getRoute(this.$router.options.routes)
                return tempObj
            },
            sideBarOptions() {
                const appRoute = this.routeMap[APP_ROUTE_NAME] || {}
                return appRoute.children || []
            }
        }
    }
</script>
