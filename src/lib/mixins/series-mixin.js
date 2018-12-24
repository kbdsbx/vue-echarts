
export default {
    methods : {
        getParams () {
            var options = { ...this.$props, type : this.type, tag : this.$options.name, children : [], listeners : this.$listeners, componentType : 'series', componentSubType : this.$data.type };

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