<template>
    <layoutView :navOptions="navOptions" :isCollapse="isCollapse" :menuBackgroundColor="menuBackgroundColor"
                :menuTextColor="menuTextColor" :menuActiveTextColor="menuActiveTextColor"
                :navBarBackgroundColor="navBarBackgroundColor">
        <div slot="navBar">
            <button @click="isCollapse=!isCollapse">展开/收起</button>
        </div>
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
        data() {
            return {
                isCollapse: true,
                navBarBackgroundColor: '#11233f',
                menuBackgroundColor: '#11233f',
                menuTextColor: '#ffffff',
                menuActiveTextColor: '#ffffff',
            }
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
            navOptions() {
                const appRoute = this.routeMap[APP_ROUTE_NAME] || {}
                return appRoute.children || []
            }
        }
    }
</script>
