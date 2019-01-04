<template>
<div class="i-echarts-options">
    <slot></slot>
</div>
</template>

<script>
import cmpMixin from '../mixins/component-mixin.js'

const TYPE = 'radar';

export default {
    name : 'i-' + TYPE,

    mixins : [cmpMixin],

    data () {
        return {
            componentType : TYPE,
        }
    },

    props : {
        id : {
            type : [Number, String],
            default : "",
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
            type : [String, Number, Array],
            default : '75%',
        },
        startAngle : {
            type : Number,
            default : 90,
        },
        name : {
            type : Object,
            default : () => {},
        },
        nameGap : {
            type : Number,
            default : 15
        },
        splitNumber : {
            type : Number,
            default : 5,
        },
        shap : {
            type : String,
            default : 'polygon',
        },
        scale : {
            type : Boolean,
            default : false,
        },
        silent : {
            type : Boolean,
            default : false,
        },
        triggerEvent : {
            type : Boolean,
            default : false,
        },
        axisLine : {
            type : Object,
            default : () => {},
        },
        splitLine : {
            type : Object,
            default : () => {},
        },
        splitArea : {
            type : Object,
            default : () => {},
        },
        indicator : {
            type : Array,
            default : () => [],
        }
    }
}
</script>

<style>

</style>
