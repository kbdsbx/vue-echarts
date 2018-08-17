<template>
</template>

<script>
import cmpMixin from '../mixins/component-mixin.js'

const TYPE = 'tooltip';

export default {
    name : 'i-tooltip',
    mixins : [ cmpMixin ],

    data () {
        return {
            componentType : TYPE,
        }
    },

    props : {
        show : {
            type : Boolean,
            default : true,
        },
        trigger : {
            type : String,
            default : "item",
        },
        axisPointer : {
            type : Object,
            default : () => ( {} ),
        },
        showContent : {
            type : Boolean,
            default : true,
        },
        alwaysShowContent : {
            type : Boolean,
            default: false,
        },
        triggerOn : {
            type : String,
            default : "mousemove|click",
        },
        showDelay : {
            type : Number,
            default : 0,
        },
        hideDelay : {
            type : Number,
            default : 100,
        },
        enterable : {
            type : Boolean,
            default : false,
        },
        confine : {
            type : Boolean,
            default : false,
        },
        transitionDuration : {
            type : Number,
            default : 0.4,
        },
        position : {
            type : Object,
            default : () => undefined,
        },
        formatter : {
            default : () => undefined,
        },
        backgroundColor : {
            type : String,
            default : "rgba(50,50,50,0.7)",
        },
        borderColor : {
            type : String,
            default : "#333",
        },
        borderWidth : {
            type : Number,
            default : 0,
        },
        padding : {
            type : Number,
            default : 5,
        },
        textStyle : {
            type : Object,
            default : () => ( {} ),
        },
        extraCssText : {
            type : String,
            default : "",
        }
    }
}
</script>

<style>

</style>
