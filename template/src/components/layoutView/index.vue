<template>
    <layout>
        <navBar slot="navBar" :isCollapse="isCollapse"
                @collapseChange="handlerChangeCollapse">
            <template slot="navBar_left">
                <slot name="navBar_left"/>
            </template>
            <template slot="navBar_left">
                <slot name="navBar_left"/>
            </template>
        </navBar>
        <sideBar slot="sideBar" :options="sideBarOptions" :isCollapse="isCollapse"/>
        <template  slot="mainView">
            <slot/>
        </template>
    </layout>
</template>
<script>
    import layout from './components/layout'
    import navBar from './components/navBar'
    import sideBar from './components/sideBar'

    export default {
        props: {
            sideBarOptions: {
                type: Object,
                default: () => ({})
            }
        },
        components: {
            layout,
            navBar,
            sideBar
        },
        data() {
            return {
                isCollapse: false
            }
        },
        methods: {
            handlerChangeCollapse(isCollapse) {
                this.isCollapse = isCollapse
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>
