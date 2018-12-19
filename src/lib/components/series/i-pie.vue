<template>
<div class="i-echarts-options">
    <slot></slot>
</div>
</template>

<script>
import cmpMixin from '../../mixins/component-mixin.js'
import serMixin from '../../mixins/series-mixin.js'

const TYPE = 'pie';

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
        hoverAnimation : {
            type : Boolean,
            default : true,
        },
        hoverOffset : {
            type : Number,
            default : 10,
        },
        selectedMode : {
            default : false,
        },
        selectedOffset : {
            type: Number,
            default : 10
        },
        clockwise : {
            type : Boolean,
            default : true,
        },
        startAngle : {
            type : Number,
            default : 90,
        },
        minAngle : {
            type : Number,
            default : 0,
        },
        roseType : {
            default : false,
        },
        avoidLabelOverlap : {
            type : Boolean,
            default : true,
        },
        stillShowZeroSum : {
            type : Boolean,
            default : true,
        },
        cursor : {
            type : String,
            default : 'pointer',
        },
        label : {
            type : Object,
            default : () => undefined,
        },
        labelLine : {
            type : Object,
            default : () => undefined,
        },
        itemStyle : {
            type : Object,
            default : () => undefined,
        },
        emphasis : {
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
        center : {
            type : Array,
            default : () => [ '50%', '50%' ],
        },
        radius : {
            default : () => [0, '75%'],
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
            default :() =>  [],
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
        silent : {
            type : Boolean,
            default : false,
        },
        animationType : {
            type : String,
            default : 'expansion',
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
            default : () => 0,
        },
        animationDurationUpdate : {
            default : () => 300
        },
        animationEasingUpdate : {
            type : String,
            default : "cubicOut",
        },
        animationDelayUpdate : {
            default : () => 0
        },
        tooltip : {
            type : Object,
            default : () => undefined,
        }
    }
}
</script>

<style>

</style>
