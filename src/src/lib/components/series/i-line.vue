<template>
</template>

<script>
import cmpMixin from '../../mixins/component-mixin.js'
import serMixin from '../../mixins/series-mixin.js'

const TYPE = 'line';

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
        polarIndex : {
            type : Number,
            default : 0,
        },
        symbol : {
            type : String,
            default : 'emptyCircle',
        },
        symbolSize : {
            type : Number,
            default : 4,
        },
        symbolRotate : {
            type : Number,
            default : undefined
        },
        symbolKeepAspect : {
            type : Boolean,
            default : false,
        },
        symbolOffset : {
            type : Array,
            default : () => [0,0]
        },
        symbolOffset : {
            type : Boolean,
            default : false,
        },
        showAllSymbol : {
            type : Object,
            default : () => 'auto' 
        },
        hoverAnimation : {
            type : Boolean,
            default : true,
        },
        legendHoverLink : {
            type : Boolean,
            default : true,
        },
        stack : {
            type : String,
            default : null,
        },
        cursor : {
            type : String,
            default : 'pointer',
        },
        connectNulls : {
            type : Boolean,
            default : false,
        },
        clipOverflow : {
            type : Boolean,
            default : true,
        },
        step : {
            type : Object,
            default : () => false,
        },
        label : {
            type : Object,
            default : () => undefined
        },
        itemStyle : {
            type : Object,
            default : () => undefined,
        },
        lineStyle : {
            type : Object,
            default : () => undefined,
        },
        areaStyle : {
            type : Object,
            default : () => undefined,
        },
        emphasis : {
            type : Object,
            default : () => undefined,
        },
        smooth : {
            type : Object,
            default : () => false,
        },
        smoothMonotone : {
            type : String,
            default : undefined,
        },
        sampling : {
            type : String,
            default : undefined,
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
            type : Object,
            default : () => 0,
        },
        animationDurationUpdate : {
            type : Object,
            default : () => 300
        },
        animationEasingUpdate : {
            type : String,
            default : "cubicOut",
        },
        animationDelayUpdate : {
            type : Object,
            default : () => 0
        },
        tooltip : {
            type : Object,
            default : () => undefined,
        }
    },
}
</script>