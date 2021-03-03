<script>
    export default {
        props: {
            data: Array,
            options: Array
        },
        render(h) {
            const { data, options } = this;
            const elTableColumnVNodes = (options || []).map(item => {
                const { type, key, label } = item;
                switch (type) {
                    case 'slot':
                    case 'expand':
                        return h('el-table-column', {
                            key,
                            props: { label, type },
                            scopedSlots: { default: props => this.$scopedSlots[key] && this.$scopedSlots[key](props) }
                        });

                    default:
                        return h('el-table-column', { key, props: { prop: key, label } });
                }
            });
            return h('el-table', { props: { data }, on: { ...this.$listeners } }, elTableColumnVNodes);
        }
    };
</script>

<style scoped>

</style>
