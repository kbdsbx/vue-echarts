<template>
<div class="i-echarts-options">
    <slot></slot>
</div>
</template>

<script>
import cmpMixin from '../../mixins/component-mixin.js'
import serMixin from '../../mixins/series-mixin.js'

const TYPE = 'radars';

export default {
    name : 'i-' + TYPE,

    mixins : [cmpMixin, serMixin],


    data () {
        return {
            type : 'radar',
        }
    },

    props : {
        id : {
            type : [Number, String],
            default : undefined,
        },
        name : {
            type : [Number, String],
            default : undefined,
        },
        radarIndex : {
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
        data : {
            type : Array,
            default : () => [],
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
            type : [Number, Function],
            default : () => 0,
        },
        animationDurationUpdate : {
            type : [Number, Function],
            default : () => 300
        },
        animationEasingUpdate : {
            type : String,
            default : "cubicOut",
        },
        animationDelayUpdate : {
            type : [Number, Function],
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
