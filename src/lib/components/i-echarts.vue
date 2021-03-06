<template>
    <div class="i-echarts-container" :style="`width: ${width}; height : ${height};`">
        <div id="i-echarts-canvas"></div>
        <slot></slot>
    </div>
</template>

<script>
import echarts from 'echarts'
import comMixin from '../mixins/component-mixin.js'
import serialize from 'serialize-javascript'

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
            events : [],

            const_events_name : [
                'click',
                'dblclick',
                'mousedown',
                'mousemove',
                'mouseup',
                'mouseover',
                'mouseout',
            ],
        };
    },

    mounted () {
        this.$nextTick( () => {
            this.createEcharts();
        } );
    },

    updated () {
        this.$echarts.clear();
        this.updateParams();
    },

    methods : {
        createEcharts () {
            if ( ! this.$echarts ) {
                this.$echarts = echarts.init( this.$el.querySelector( '#i-echarts-canvas' ) )
                for ( let et of this.const_events_name ) {
                    this.$echarts.on( et, this.eventHandle );
                }
            }
            this.updateParams();
        },

        eventHandle ( event ) {
            let eventObj = this.events.find( x => {
                return x.type == event.type &&
                    x.componentType == event.componentType &&
                    x.componentSubType == event.componentSubType &&
                    x.seriesName == event.seriesName;
            } );
            if ( eventObj ) {
                eventObj.handle.call( this, event );
            }
        },

        updateParams () {
            this.options = {};
            this.events = [];
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
                'i-radars',
                'i-pie',
            ].indexOf( params.tag ) !== -1 ) {
                var tag = params.tag.replace( /^i-/, '' );
                if ( tag == 'radars' ) {
                    tag = 'radar';
                }
                this.options.series = this.options.series || [];
                this.options.series.push( { ...params } );
            }

            if ( [
                'i-x-axis',
                'i-y-axis',
                'i-data-zoom'
            ].indexOf( params.tag ) !== -1 ) {
                var tag = params.tag
                    .replace( /^i-/, '' )
                    .replace( /-a/, 'A' )
                    .replace( /-z/, 'Z' );

                this.options[ tag ] = this.options[ tag ] || [];
                this.options[ tag ].push( { ...params } );
            }

            if ( [
                'i-tooltip',
                'i-grid',
                'i-legend',
                'i-radar',
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

            for ( let ls in params.listeners ) {
                let handle = params.listeners[ls];
                if ( this.const_events_name.indexOf( ls ) != -1 ) {
                    this.events.push( {
                        type : ls,
                        componentType : params.componentType,
                        componentSubType : params.componentSubType,
                        seriesName : params.name,
                        handle,
                    } );
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
#i-echarts-canvas {
    width: 100%;
    height: 100%;
}
</style>
