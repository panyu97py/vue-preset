<script>
import iconFont from '@/components/icon'
export default {
  name: 'sideBarItem',
  functional: true,
  components:{
      iconFont
  },
  props: {
    option: Object,
    index: Number
  },
  render (createElement, content) {
    const {props: {option}} = content
    const {name, meta: {icon, title} = {}, children} = option
    const noHiddenChildren = (children && children.filter(item => (!item.hidden))) || []
    const childrenOption = noHiddenChildren.length > 1 && noHiddenChildren
    const childrenVNode = childrenOption && childrenOption.map(item => (
      createElement('sideBarItem', {key: item.name, props: {option: item}})
    ))
    const iconVNode = icon && createElement('div', {
      class: 'iconClass'
    },
    [
      createElement(iconFont, {
        props: {
          iconName: icon,
          size: 20
        }
      })
    ]
    )
    return createElement(childrenOption ? 'el-submenu' : 'el-menu-item', {props: {index: name, route: {name}}},
      [
        createElement('template', {slot: childrenOption ? 'title' : 'default'}, [iconVNode, createElement('span', {slot: 'title'}, title)]),
        childrenVNode
      ]
    )
  }
}
</script>

<style lang="scss" scoped>
  .iconClass {
    font-size: 20px;
    padding-right: 5px;
    height: 100%;
    display: inline-block;
  }

  ::v-deep .el-submenu__title {
    display: flex;
    align-items: center;
  }
</style>
