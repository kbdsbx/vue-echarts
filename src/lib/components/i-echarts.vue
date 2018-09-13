<template>
    <div class="i-echarts-container" :style="`width: ${width}; height : ${height};`">
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
        width : {
            type : String,
            default : "100%",
        },
        height : {
            type : String,
            default : "100%",
        },
        color : {
            type : Array,
            default: () => undefined,
        },
        backgroundColor : {
            type : String,
            default : undefined,
        },
        textStyle : {
            type : Object,
            default : () => ( {} ),
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
        this.$nextTick( () => {
            this.createEcharts();
        } );
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
            this.$echarts.setOption( this.options );
        },

        // 递归遍历节点参数创建图表参数
        updateOptions ( params, parent ) {
            if ( [
                'i-echarts'
            ].indexOf( params.tag ) !== -1 ) {
                this.options = { ...this.params, ...this.options };
            }

            if( [
                'i-bar',
                'i-line',
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
                'i-grid',
                'i-legend',
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
}
.i-echarts-options {
    display: none;
}
</style>
