<template>
    <div class="navBar">
        <div class="navBar_left">
            <collapseOperate v-bind="$attrs" @collapseChange="handlerCollapseChange"/>
            <div>
                <slot name="navBar_left"/>
            </div>
        </div>
        <div class="navBar_right">
            <slot name="navBar_right"/>
        </div>
    </div>
</template>

<script>
    import collapseOperate from './collapseOperate'

    export default {
        components: {
            collapseOperate,
        },
        methods: {
            handlerCollapseChange(isCollapse) {
                this.$emit('collapseChange', isCollapse)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navBar {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #0b1a32;

        > div {
            height: 100%;
        }

        &_left {
            display: flex;
        }

        &_right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }
    }
</style>
