<template>
<div class="i-echarts-options">
    <slot></slot>
</div>
</template>

<script>
import cmpMixin from '../mixins/component-mixin.js'

const TYPE = 'legend';

export default {
    name : 'i-legend',
    mixins : [ cmpMixin ],

    data () {
        return {
            componentType : TYPE,
        }
    },

    props : {
        type : {
            type : String,
            default : "",
        },
        id : {
            type : [Number, String],
            default : "",
        },
        show : {
            type : Boolean,
            default : true,
        },
        zlevel : {
            type : Number,
            default : 0,
        },
        z : {
            type : Number,
            default : 0,
        },
        left : {
            type : [String, Number],
            default : "auto",
        },
        top : {
            type : [String, Number],
            default : "auto",
        },
        right : {
            type : [String, Number],
            default : "auto",
        },
        bottom: {
            type : [String, Number],
            default : "auto",
        },
        width : {
            type : [String, Number],
            default : "auto",
        },
        height : {
            type : [String, Number],
            default : "auto",
        },
        orient : {
            type : String,
            default : "horizontal",
        },
        align : {
            type : String,
            default : "auto",
        },
        padding : {
            type : [Number, Array],
            default : 5
        },
        itemGap : {
            type : Number,
            default : 10
        },
        itemWidth : {
            type : Number,
            default :25 
        },
        itemHeight : {
            type : Number,
            default :  14,
        },
        symbolKeepAspect : {
            type : Boolean,
            default : true,
        },
        formatter : {
            type : [String, Function],
            default : null,
        },
        selectedMode : {
            type : [String, Boolean],
            default : true,
        },
        inactiveColor : {
            type : String,
            default : "#ccc",
        },
        selected : {
            type : Object,
            default : () => ( {} ),
        },
        textStyle : {
            type : Object,
            default : () => ( {} ),
        },
        tooltip : {
            type : Object,
            default : () => ( {} ),
        },
        data : {
            type : Array,
            default : () => [],
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
            default : 0,
        },
        borderRadius : {
            type : [Number, Array],
            default : 0,
        },
        shadowBlur : {
            type : Number,
            default : 0,
        },
        shadowColor : {
            type : String,
            default : "#ccc",
        },
        shadowOffsetX : {
            type : Number,
            default : 0,
        },
        shadowOffsetY : {
            type : Number,
            default : 0,
        },
        scrollDataIndex : {
            type : Number,
            default : 0,
        },
        pageButtonItemGap : {
            type : Number,
            default : 5,
        },
        pageButtonGap : {
            type : Number,
            default : null,
        },
        pageButtonPosition : {
            type : String,
            default : "end",
        },
        pageFormatter : {
            type : [String, Function],
            default : "{current}/{total}",
        },
        pageIcons : {
            type : Object,
            default : () => {},
        },
        pageIconColor : {
            type : String,
            default : "#2f4554",
        },
        pageIconInactiveColor : {
            type : String,
            default : "#2f4554",
        },
        pageIconSize : {
            default : 15,
        },
        pageTextStyle : {
            type : Object,
            default : () => ( {} ),
        },
        animation : {
            type : Boolean,
            default : true,
        },
        animationDurationUpdate : {
            type : Number,
            default : 800
        },
    }
}
</script>