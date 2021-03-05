<template>
    <layout>
        <div slot="navBar" :style="`background:${navBarBackgroundColor};height:100%;`">
            <slot name="navBar"/>
        </div>
        <sideBar slot="sideBar" v-bind="$props"/>
        <template slot="mainView">
            <slot/>
        </template>
    </layout>
</template>
<script>
    import layout from './components/layout'
    import sideBar from './components/sideBar'

    export default {
        props: {
            isCollapse: Boolean,
            navBarBackgroundColor: String,
            menuBackgroundColor: String,
            menuTextColor: String,
            menuActiveTextColor: String,
            navOptions: {
                type: Array,
                default: () => ({})
            }
        },
        components: {
            layout,
            sideBar
        }
    }
</script>
<style lang="scss" scoped>
</style>
