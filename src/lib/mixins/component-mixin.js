import serialize from 'serialize-javascript'

export default {
    created () {
        this.setWatches();
    },

    methods : {
        setWatches () {
            Object.keys( this.$props ).forEach( prop => {
                this.$watch( prop, ( n, o ) => {
                    /**
                     * 通过对新旧对象序列化比较两者是否为同一对象
                     * 对内容相同但引用不同的对象不执行更新
                     */
                    if ( serialize( n ) != serialize( o ) ) {
                        this.updateParams();
                    }
                } );
            } )
        },

        updateParams () {
            this.$parent.updateParams();
        },

        // 获取所有子节点参数
        getParams () {
            var options = { ...this.$props, tag : this.$options.name, children : [] };

            this.$children.forEach( ch => {
                if ( ch.componentType == 'tooltip' ) {
                    options.tooltip = ch.getParams();
                    options.tooltip.trigger = 'item';
                }

                options.children.push( ch.getParams() );
            } )

            return options;
        }
    }
}