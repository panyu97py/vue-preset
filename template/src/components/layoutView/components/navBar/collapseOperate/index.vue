<template>
  <div class="collapseOperate">

  </div>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean
  },
  methods: {
    handlerChangeCollapseStatus () {
      const {isCollapse} = this
      this.$emit('collapseChange', !isCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
  .collapseOperate {
    display: flex;
    color: white;
    height: 100%;
    align-items: center;

    &_icon {
      padding: 10px;
    }
  }
</style>
