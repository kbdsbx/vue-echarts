<template>
<div class="chart-area">
    <button v-on:click="random">Random</button>
    <button v-on:click="rename">Rename</button>
    <i-echarts>
        <i-bar
            :name="barName"
            :data="barData"
        >
            <i-tooltip
                :axisPointer="{ type : 'shadow' }"
            ></i-tooltip>
        </i-bar>
        <i-bar
            :name="barName"
            :data="barData"
        >
            <i-tooltip
                :padding="0"
                :border="0"
                :axisPointer="{ type : 'shadow' }"
                :formatter="( a, b, c, d ) => { return `<span style='background-color: white; color: #999; padding: 5px;'>${a.name} : ${a.value}</span>`; }"
            ></i-tooltip>
        </i-bar>
        <i-x-axis
            :data="barxAxis"
        ></i-x-axis>
        <i-y-axis></i-y-axis>
    </i-echarts>
</div>
</template>

<script>
export default {
    data () {
        return {
            barData : [5, 20, 36, 10, 10, 20],
            barName : '销量',
            barxAxis : ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子'],
        }
    },
    components : {
    },
    methods : {
        random () {
            var temp = [];
            for( var i = 0; i < 6; i++ ) {
                var t = Math.floor( Math.random() * 50 );
                temp.push( t );
            }
            this.barData = temp;
        },
        rename () {
            this.barName = '' + ( Math.random() * 100 );
        }
    }
}
</script>

<style>

.chart-area {
    width: 300px;
    height: 400px;
}

</style>
