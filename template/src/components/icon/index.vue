<template>
    <span class="iconfont" :class="iconName" :style="`fontSize:${size}px`"></span>
</template>

<script>
    export default {
        props: {
            iconName: String,
            size: Number
        }
    }
</script>

<style scoped>

</style>
