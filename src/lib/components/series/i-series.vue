<template>
<div class="i-echarts-options">
    <slot></slot>
</div>
</template>

<script>
import cmpMixin from '../../mixins/component-mixin.js'

const TYPE = 'series';

export default {
    name : 'i-' + TYPE,
    mixins : [cmpMixin],

    data () {
        return {
            type : TYPE,
        }
    },

    props : [],
}
</script>

