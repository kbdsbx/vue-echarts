<template>
<div class="i-echarts-options">
    <slot></slot>
</div>
</template>

<script>
import cmpMixin from '../../mixins/component-mixin.js'
import serMixin from '../../mixins/series-mixin.js'

const TYPE = 'bar';

export default {
    name : 'i-' + TYPE,

    mixins : [cmpMixin, serMixin],

    data () {
        return {
            type : TYPE,
        }
    },

    props : {
        id : {
            type : String,
            default : undefined,
        },
        name : {
            type : String,
            default : undefined,
        },
        legendHoverLink : {
            type : Boolean,
            default : true,
        },
        coordinateSystem : {
            type : String,
            default : 'cartesian2d',
        },
        xAxisIndex : {
            type : Number,
            default : 0,
        },
        yAxisIndex : {
            type : Number,
            default : 0,
        },
        label : {
            type : Object,
            default : () => undefined
        },
        itemStyle : {
            type : Object,
            default : () => undefined,
        },
        emphasis : {
            type : Object,
            default : () => undefined,
        },
        stack : {
            type : String,
            default : null,
        },
        cursor : {
            type : String,
            default : 'pointer',
        },
        barWidth : {
            type : Object,
            default : () => undefined,
        },
        barMaxWidth : {
            type : Object,
            default : () => undefined,
        },
        barMinHeight : {
            type : Number,
            default : 0,
        },
        barGap : {
            type : String,
            default : '30%', 
        },
        barCategoryGap : {
            type : String,
            default : '20%',
        },
        large : {
            type : Boolean,
            default : false,
        },
        largeThreshold : {
            type : Number,
            default : 400,
        },
        progressive : {
            type : Number,
            default : 5000,
        },
        progressiveThreshold : {
            type : Number,
            default : 3000,
        },
        progressiveChunkMode : {
            type : String,
            default : 'mod',
        },
        dimensions : {
            type : Array,
            default : () => undefined,
        },
        encode : {
            type : Object,
            default : () => undefined,
        },
        seriesLayoutBy : {
            type : String,
            default : 'column',
        },
        datasetIndex : {
            type : Number,
            default : 0,
        },
        data : {
            type : Array,
            default : () => [],
        },
        markPoint : {
            type : Object,
            default : () => undefined,
        },
        markLine : {
            type : Object,
            default : () => undefined,
        },
        markArea : {
            type : Object,
            default : () => undefined,
        },
        zlevel : {
            type : Number,
            default : 0,
        },
        z : {
            type : Number,
            default : 2,
        },
        silent : {
            type : Boolean,
            default : false,
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
        tooltip : {
            type : Object,
            default : () => undefined,
        },
    },
}
</script>