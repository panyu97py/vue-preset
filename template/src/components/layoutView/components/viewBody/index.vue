<template>
  <div class="viewBody">
    <div class="viewBody_head" v-if="$slots.left||$slots.right">
      <div>
        <slot name="left"/>
      </div>
      <div>
        <slot name="right"/>
      </div>
    </div>
    <div class="viewBody_body">
      <slot/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .viewBody {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    &_head {
      width: 100%;
      background: white;
      height: $layout_mainView_breadcrumb_height;
      line-height: $layout_mainView_breadcrumb_height;
      box-shadow: 0px 1px 2px 0px rgba(207, 209, 213, 0.2);
      display: flex;
      justify-content: space-between;
      padding: 0 $layout_mainView_padding;
    }

    &_body {
      flex: 1;
      height: 0;
      box-sizing: border-box;
      padding: $layout_mainView_padding;
      overflow: auto;
    }
  }
</style>
