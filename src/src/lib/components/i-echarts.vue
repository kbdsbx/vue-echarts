<template>
    <div class="i-echarts-container">
        <slot></slot>
    </div>
</template>

<script>
import echarts from 'echarts'
import comMixin from '../mixins/component-mixin.js'

const TAG_NAME = 'i-echarts';

export default {
    name : TAG_NAME,
    mixins: [comMixin],

    props : {
        color : {
            type : Array,
            default: () => undefined,
        },
        backgroundColor : {
            type : Object,
            default : () => undefined,
        },
        textStyle : {
            type : Object,
            default : () => undefined,
        },
        animation : {
            type : Boolean,
            default : true,
        },
        animationThreshold : {
            type : Number,
            default : 2000,
        },
        animationDuration : {
            type : Number,
            default : 1000,
        },
        animationEasing : {
            type : String,
            default : 'linear',
        },
        animationDelay : {
            type : Number,
            default : 0,
        },
        animationDurationUpdate : {
            type : Number,
            default : 300
        },
        animationEasingUpdate : {
            type : String,
            default : "cubicOut",
        },
        animationDelayUpdate : {
            type : Number,
            default : 0
        },
        blendMode : {
            type : String,
            default : 'source-over',
        },
        hoverLayerThreshold : {
            type : Number,
            default : undefined,
        },
        useUTC : {
            type : Boolean,
            default : false,
        }
    },

    data () {
        return {
            options : {},
            params : {},
        };
    },

    mounted () {
        this.createEcharts();
    },

    methods : {
        createEcharts () {
            if ( ! this.$echarts ) {
                this.$echarts = echarts.init( this.$el )
            }
            this.updateParams();
        },

        updateParams () {
            this.options = {};
            this.params = this.getParams();
            this.updateOptions( this.params, {} );
            console.log( this.options );
            this.$echarts.setOption( this.options );
        },

        // 递归遍历节点参数创建图表参数
        updateOptions ( params, parent ) {
            if( [
                'i-bar'
            ].indexOf( params.tag ) !== -1 ) {
                this.options.series = this.options.series || [];
                this.options.series.push( { ...params } );
            }

            if ( [
                'i-x-axis',
                'i-y-axis',
            ].indexOf( params.tag ) !== -1 ) {
                var tag = params.tag.replace( /^i-/, '' ).replace( /-a/, 'A' );
                this.options[ tag ] = this.options[ tag ] || [];
                this.options[ tag ].push( { ...params } );
            }

            if ( [
                'i-tooltip',
            ].indexOf( params.tag ) !== -1 ) {
            }

            if ( [
                'i-tooltip',
                'i-grid',
            ].indexOf( params.tag ) !== -1 ) {
                // 如果非根选项包含tooltip，对tooltip设置空对象
                if ( params.tag == 'i-tooltip' && parent.tag != 'i-echarts' ) {
                    if ( undefined === this.options[ 'tooltip' ] ) {
                        this.options['tooltip'] = {};
                    }
                } else {
                    var tag = params.tag.replace( /^i-/, '' );
                    this.options[ tag ] = params;
                }
            }

            if ( params.children.length ) {
                params.children.forEach( x => this.updateOptions( x, params ) );
            }
        },
    },
}
</script>

<style>
.i-echarts-container {
    position: relative;
    width: 100%;
    height: 100%;
}
.i-echarts-options {
    display: none;
}
</style>
