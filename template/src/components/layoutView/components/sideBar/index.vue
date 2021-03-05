<template>
    <div class="sideBar" :class="{sideBar_isCollapse:isCollapse,sideBar_notCollapse:!isCollapse}" :style="`backgroundColor:${menuBackgroundColor}`">
        <el-menu :collapse="isCollapse"
                 unique-opened
                 router
                 :background-color="menuBackgroundColor"
                 :text-color="menuTextColor"
                 :active-text-color="menuActiveTextColor">
            <sideBarItem v-for="item in navOptions" :key="item.name" :isCollapse="isCollapse" :option="item"/>
        </el-menu>
    </div>
</template>

<script>
    import sideBarItem from './item'

    export default {
        props: {
            isCollapse: Boolean,
            menuBackgroundColor: String,
            menuTextColor: String,
            menuActiveTextColor: String,
            navOptions: {
                type: Array,
                default: () => []
            }
        },
        components: {
            sideBarItem
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep .el-menu {
        border: none !important;
    }

    .sideBar {
        height: 100%;
        transition: width 0.5s;
        position: relative;
        overflow: hidden;

        &_isCollapse {
            width: 64px;
        }

        &_notCollapse {
            width: 180px;
        }
    }
</style>
