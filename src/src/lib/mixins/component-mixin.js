
export default {
    created () {
        this.setWatches();
    },

    methods : {
        setWatches () {
            Object.keys( this.$props ).forEach( prop => {
                this.$watch( prop, ( n, o ) => {
                    this.$parent.updateParams();
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