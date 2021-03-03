<template>
    <div class="sideBar" :class="{sideBar_isCollapse:isCollapse,sideBar_notCollapse:!isCollapse}">
        <el-menu :collapse="isCollapse"
                 unique-opened
                 router
                 background-color="#11233f"
                 text-color="rgba(255,255,255,0.6)"
                 active-text-color="#fff"
                 active-background-color="#1890FF">
            <sideBarItem v-for="item in options.filter(option=>(!option.hidden))" :key="item.name" :option="item"/>
        </el-menu>
    </div>
</template>

<script>
    import sideBarItem from './item'

    export default {
        props: {
            isCollapse: Boolean,
            options: {
                type: Array,
                default: () => []
            }
        },
        components: {
            sideBarItem
        },
        methods: {
            handlerChangeCollapse() {
                this.$emit('changeCollapse', !this.isCollapse)
            }
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep .el-menu {
        border: none !important;
    }

    .sideBar {
        background: #11233f;
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
