<script>
    import iconFont from '@/components/icon'

    export default {
        name: 'sideBarItem',
        functional: true,
        components: {
            iconFont
        },
        props: {
            option: Object,
            index: Number,
            isCollapse: Boolean
        },
        render(createElement, content) {
            const {props: {option, isCollapse}} = content
            const {name, meta: {icon, title} = {}, children, hidden} = option
            if (hidden) return
            const childrenVNode = children && children.map(item => (
                createElement('sideBarItem', {key: item.name, props: {option: item, isCollapse}})
            ))
            const iconVNode = icon && createElement('div', {
                    class: 'iconClass',
                    style: {
                        marginRight: !isCollapse ? '5px' : '0px'
                    }
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
            return createElement(children ? 'el-submenu' : 'el-menu-item', {props: {index: name, route: {name}}},
                [
                    createElement('template', {slot: children ? 'title' : 'default'}, [iconVNode, createElement('span', {slot: 'title'}, title)]),
                    childrenVNode
                ]
            )
        }
    }
</script>

<style lang="scss" scoped>
    .iconClass {
        font-size: 20px;
        height: 100%;
        display: inline-block;
    }

    ::v-deep .el-submenu__title {
        display: flex;
        align-items: center;
    }
</style>
