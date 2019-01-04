<template>
<div class="i-echarts-options">
    <slot></slot>
</div>
</template>

<script>
import cmpMixin from '../mixins/component-mixin.js'

const TYPE = 'dataZoom';

export default {
    name : 'i-data-zoom',
    mixins : [ cmpMixin ],

    data () {
        return {
            componentType : TYPE,
        }
    },

    props : {
        type : {
            type : String,
            default : 'slider',
        },
        id : {
            type : [Number, String],
            default : "",
        },
        show : {
            type : Boolean,
            default : true,
        },
        backgroundColor : {
            type : String,
            default : 'rgba(47,69,84,0)',
        },
        dataBackground : {
            type : Object,
            default : () => {}, 
        },
        fillerColor : {
            type : String,
            default : 'rgba(167,183,204,0.4)',
        },
        borderColor : {
            type : String,
            default : '#ddd',
        },
        handleIcon : {
            type : String,
            default : 'M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z',
        },
        handleSize : {
            type : String,
            default : '100%',
        },
        handleStyle : {
            type : Object,
            default : () => {},
        },
        labelPrecision : {
            type : [String, Number],
            default : 'auto',
        },
        labelFormatter : {
            type : [String, Function],
            default : '',
        },
        showDetail : {
            type : Boolean,
            default : true,
        },
        showDataShadow : {
            type : String,
            default : 'auto',
        },
        realtime : {
            type : Boolean,
            default : true,
        },
        textStyle : {
            type : Object,
            default : () => {},
        },
        xAxisIndex : {
            type : [Number, Array],
            default : undefined,
        },
        yAxisIndex : {
            type : [Number, Array],
            default : undefined,
        },
        radiusAxisIndex : {
            type : [Number, Array],
            default : undefined,
        },
        angleAxisIndex : {
            type : [Number, Array],
            default : undefined,
        },
        filterMode : {
            type : String,
            default : 'filter',
        },
        start : {
            type : Number,
            default : 0,
        },
        end : {
            type : Number,
            default : 100,
        },
        startValue : {
            type : [Number, String, Date],
            default : undefined,
        },
        endValue : {
            type : [Number, String, Date],
            default : undefined,
        },
        minSpan : {
            type : Number,
            default : undefined,
        },
        maxSpan : {
            type : Number,
            default : undefined,
        },
        minValueSpan : {
            type : [Number, String, Date],
            default : undefined,
        },
        maxValueSpan : {
            type : [Number, String, Date],
            default : undefined,
        },
        orient : {
            type : String,
            default : undefined,
        },
        zoomLock : {
            type : Boolean,
            default : false,
        },
        throttle : {
            type : Number,
            default : 100,
        },
        rangeMode : {
            type : Array,
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
        left : {
            type : [String, Number],
            default : 'auto',
        },
        top : {
            type : [String, Number],
            default : 'auto',
        },
        right : {
            type : [String, Number],
            default : 'auto',
        },
        bottom : {
            type : [String, Number],
            default : 'auto',
        }
    }
}
</script>
