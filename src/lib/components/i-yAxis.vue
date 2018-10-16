<template>
<div class="i-echarts-options">
</div>
</template>

<script>
import cmpMixin from '../mixins/component-mixin.js'

const TYPE = 'yAxis';

export default {
    name : 'i-y-axis',
    mixins : [ cmpMixin ],

    data () {
        return {
            componentType : TYPE,
        }
    },

    props : {
        id : {
            type : String,
            default : undefined,
        },
        show : {
            type : Boolean,
            default : true,
        },
        gridIndex : {
            type : Number,
            default : 0,
        },
        position : {
            type : String,
            default : undefined,
        },
        offset : {
            type : Number,
            default: 0,
        },
        type : {
            type : String,
            default : 'value',
        },
        name : {
            type : String,
            default : undefined,
        },
        nameLocation : {
            type : String,
            default: "end",
        },
        nameTextStyle : {
            type : Object,
            default : () => ( {} ),
        },
        nameGap : {
            type : Number,
            default : 15,
        },
        nameRotate : {
            type : Number,
            default : undefined,
        },
        inverse : {
            type : Boolean,
            default : false,
        },
        boundaryGap : {
            type : Boolean,
            default : true,
        },
        min : {
            default : null,
        },
        max : {
            default : null,
        },
        scale : {
            type : Boolean,
            default : false,
        },
        splitNumber : {
            type : Number,
            default : 5,
        },
        minInterval : {
            type : Number,
            default : 0,
        },
        maxInterval : {
            type : Number,
            default : undefined,
        },
        interval : {
            type : Number,
            default : undefined,
        },
        logBase : {
            type : Number,
            default : 10,
        },
        silent : {
            type :Boolean,
            default : false,
        },
        triggerEvent : {
            type : Boolean,
            default : false,
        },
        axisLine : {
            type : Object,
            default : () => ( {} ),
        },
        axisTick : {
            type : Object,
            default : () => ( {} ),
        },
        axisLabel : {
            type : Object,
            default : () => ( {} ),
        },
        splitLine : {
            type : Object,
            default : () => ( {} ),
        },
        splitArea : {
            type : Object,
            default : () => ( {} ),
        },
        data : {
            type : Array,
            default : () => [],
        },
        axisPointer : {
            type : Object,
            default : () => ( {} ),
        },
        zlevel : {
            type : Number,
            default : 0,
        },
        z : {
            type : Number,
            default : 0,
        }
    },
}
</script>