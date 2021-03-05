<template>
  <div class="layoutView">
    <div class="layoutView_navBar">
      <slot name="navBar"/>
    </div>
    <div class="layoutView_body">
      <div class="layoutView_sideBar">
        <slot name="sideBar"/>
      </div>
      <div class="layoutView_mainView">
        <slot name="mainView"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .layoutView {
    @include absolute-position-view;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &_navBar {
      flex-shrink: 0;
      height: 64px;
    }

    &_body {
      flex: 1;
      height: 0;
      display: flex;
      position: relative;
    }

    &_sideBar {
      flex-shrink: 0;
      height: 100%;
    }

    &_mainView {
      height: 100%;
      flex: 1;
      flex-shrink: 0;
      width: 0;
    }
  }
</style>
