<template>
<div class="i-echarts-options">
    <slot></slot>
</div>
</template>

<script>
import cmpMixin from '../mixins/component-mixin.js'

const TYPE = 'grid';

export default {
    name : 'i-grid',
    mixins : [ cmpMixin ],

    data () {
        return {
            componentType : TYPE,
        }
    },

    props : {
        id : {
            type : String,
            default : "",
        },
        show : {
            type : Boolean,
            default : false,
        },
        zlevel : {
            type : Number,
            default : 0,
        },
        z : {
            type : Number,
            default : 2,
        },
        left : {
            type : [String, Number],
            default : '10%',
        },
        top : {
            type : [String, Number],
            default : 60,
        },
        right : {
            type : [String, Number],
            default : '10%',
        },
        bottom : {
            type : [String, Number],
            default : 60,
        },
        width : {
            type : [String, Number],
            default : 'auto',
        },
        height : {
            type : [String, Number],
            default : 'auto',
        },
        containLabel : {
            type : Boolean,
            default : false,
        },
        backgroundColor : {
            type : String,
            default : "transparent",
        },
        borderColor : {
            type : String,
            default : "#ccc",
        },
        borderWidth : {
            type : Number,
            default : 1,
        },
        shadowBlur : {
            type : Number,
            default : undefined,
        },
        shadowColor : {
            type : String,
            default : () => undefined,
        },
        shadowOffsetX : {
            type : Number,
            default : 0,
        },
        shadowOffsetY : {
            type : Number,
            default : 0,
        },
        tooltip : {
            type : Object,
            default : () => undefined,
        }
    }
}
</script>

