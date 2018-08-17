<template>
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
            default : () => '10%',
        },
        top : {
            default : () => 60,
        },
        right : {
            default : () => '10%',
        },
        bottom : {
            default : () => 60,
        },
        width : {
            default : () => 'auto',
        },
        height : {
            default : () => 'auto',
        },
        containLabel : {
            type : Boolean,
            default : false,
        },
        backgroundColor : {
            default : () => "transparent",
        },
        borderColor : {
            default : () => "#ccc",
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

<style>

</style>
