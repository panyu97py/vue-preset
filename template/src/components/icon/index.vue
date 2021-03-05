<template>
    <i class="iconfont" :class="iconName" :style="`fontSize:${size}px`"></i>
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
