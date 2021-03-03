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
    <div class="viewBody_body"
         :class="($slots.left||$slots.right)&&`viewBody_bodyHasHead`">
      <slot/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  $breadcrumbHeight: 54px;
  $mainViewBodyPadding: 24px;
  .viewBody {
    width: 100%;
    height: 100%;
    /*box-sizing: border-box;*/
    /*overflow: scroll;*/
    position: relative;
    display: flex;
    flex-direction: column;

    &_head {
      /*position: absolute;*/
      /*z-index: 10;*/
      width: 100%;
      background: white;
      height: $breadcrumbHeight;
      line-height: $breadcrumbHeight;
      box-shadow: 0px 1px 2px 0px rgba(207, 209, 213, 0.2);
      display: flex;
      justify-content: space-between;
      padding: 0 $mainViewBodyPadding;
    }

    &_body {
      flex: 1;
      height: 0;
      box-sizing: border-box;
      padding: $mainViewBodyPadding;
      overflow: auto;
    }

    &_bodyHasHead {
      margin-top: $breadcrumbHeight;
    }
  }
</style>
