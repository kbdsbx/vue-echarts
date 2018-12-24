<template>
<div class="chart-area">
    <button v-on:click="random">Random</button>
    <button v-on:click="rename">Rename</button>
    <button v-on:click="clickThen">Click</button>
    <div id="demo-5" class="demo white">
        <i-echarts
            :color="['#4A90E2', '#E24A67']"
        >
            <i-legend
            :trigger="`item`"
            :formatter="`{a} <br/> {b} : {c} ({d}%)`"
            >
            </i-legend>
            <i-pie
            :name="`访问来源`"
            :data="[
                {
                    name : '男',
                    value : 54.5
                },
                {
                    name : '女',
                    value : 44.5
                }
            ]"
            :label="{
                formatter : '{b}\n{c}%',
            }"
            :labelLine="{
                length: 15,
                length2: 10
            }"
            :radius="[ '30%', '50%' ]"
            >
            </i-pie>
        </i-echarts>
    </div>
    <div id="demo-4" class="demo white">
        <i-echarts
            :color="['#9A402B', '#4686D3']"
        >
            <i-legend
                :show="true"
                :icon="`rect`"
                :right="5"
                :data="[
                    {
                        name : '今天',
                        icon: 'rect',
                        textStyle: {
                            color: '#FF4A4A',
                        }
                    },
                    {
                        name : '昨天',
                        icon: 'rect',
                        textStyle: {
                            color: '#FF4A4A',
                        }
                    }
                ]"
            >
            </i-legend>
            <i-radar
                :shape="`circle`"
                :splitNumber="4"
                :name="{ textStyle : { color: '#5E5E5E' } }"
                :splitArea="{ show : true }"
                :splitLine="{ lineStyle: { color: '#EFEFEF', width: 1 } }"
                :axisLine="{ lineStyle : { color: '#EFEFEF', width: 1 } }"
                :indicator="[
                    {
                        name : '日通份额\n基本提升比',
                        max : '14',
                        color: '#D81F10',
                    },
                    {
                        name : '日通份额\n基本提升比',
                        max : '14',
                        color: '#5E5E5E',
                    },
                    {
                        name : '日通份额\n基本提升比',
                        max : '14',
                    },
                    {
                        name : '日通份额\n基本提升比',
                        max : '14',
                    },
                    {
                        name : '日通份额\n基本提升比',
                        max : '14',
                    },
                    {
                        name : '日通份额\n基本提升比',
                        max : '14',
                    },
                    {
                        name : '日通份额\n基本提升比',
                        max : '14',
                    },
                    {
                        name : '日通份额\n基本提升比',
                        max : '14',
                    },
                ]"
            >
            </i-radar>
            <i-radars
                :id="`key1`"
                :name="`昨天`"
                :lineStyle="{
                    normal: {
                        width: 1,
                        opacity: .5
                    }
                }"
                :data="[[ 13, 2, 3, 2, 5, 4, 7, 8 ]]"
                :symbol="`circle`"
                :symbolSize="2"
                :label="{
                    normal : {
                        show : true,
                        distance: 5,
                        color: '#BD10E0',
                        position: 'top',
                        fontSize: 14,
                        formatter: function( p ) {
                            return p.value;
                        }
                    }
                }"
                :itemStyle="{
                    normal: {
                        borderColor : '#BD10E0',
                        color : '#BD10E0',
                        borderWidth : 3,
                    }
                }"
                :areaStyle="{
                    normal : {
                        color: '#BD10E0',
                        opacity: .5,
                    }
                }"
            >
            </i-radars>
            <i-radars
                :id="`key2`"
                :name="`今天`"
                :lineStyle="{
                    normal: {
                        width: 1,
                        opacity: .5
                    }
                }"
                :data="[[ 8, 7, 6, 14, 4, 10, 2, 1 ]]"
                :symbol="`circle`"
                :symbolSize="2"
                :label="{
                    normal : {
                        show : true,
                        distance: 5,
                        color: '#4A90E2',
                        position: 'top',
                        fontSize: 14,
                        formatter: function( p ) {
                            return p.value;
                        }
                    }
                }"
                :itemStyle="{
                    normal: {
                        borderColor : '#4A90E2',
                        color: '#4A90E2',
                        borderWidth : 3,
                    }
                }"
                :areaStyle="{
                    normal : {
                        color: '#4A90E2',
                        opacity: .5,
                    }
                }"
            >
            </i-radars>
        </i-echarts>
    </div>
    <div id="demo-1" class="demo">
        <i-echarts
            :color="['#9A402B', '#4686D3']"
        >
            <i-grid
                :bottom="`2%`"
                :containLabel="true"
                :left="0"
                :right="0"
                :top="`80px`"

                @click="clickHandle"
            >
            </i-grid>
            <i-legend
                :data="[{ name :'日出账收入' }, { name : '月环比' }]"
                :textStyle="{ color: '#fff' }"
            >
            </i-legend>
            <i-line
                :name="`日出账收入`"
                :data="[434, -50.88, 286.85, 228.87, 205.24, 152.02, 482.67, 185.62, 439.45, 82.24, 52.96, 95.34, 133.36]"
                :itemStyle="{ borderColor : '#fff', borderWidth : '1', color : params => ['#ffc35f', '#95c166', '#95c166', '#fff', '#fff', '#95c166', '#ffc35f', '#fff', '#ffc35f', '#fff', '#fff', '#fff', '#fff'][params.dataIndex] }"
                :markLine="{
                    silent:true,
                    symbolSize:0,
                    label:{
                        show:false
                    },
                    lineStyle:{
                        color:'#fff'
                    },
                    data: [ {
                        yAxis: 0,
                    } ]
                }"
                :lineStyle="{ normal : { color : '#9A402B' } }"
                :symbol="`circle`"
                :symbolSize="7"
                :yAxisIndex="0"
                :areaStyle="{
                    origin : 'end',
                    normal : {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#AA4133'},
                                {offset: 1, color: 'rgba( 170, 65, 51, 0 )'}
                            ]
                        )
                    }
                }"

                @click="clickHandle"
            >
            </i-line>

            <i-series v-for="( k, i ) in test_arr" :key="i">
                <i-line
                    :id="`line` + i"
                    :name="`月环比`"
                    :data="[-5.41 * k, 1.01 * k, 1.69 * k, -4.49 * k, -3.75 * k, -0.55 * k, -6.47 * k, -1.66 * k, -6.26 * k, -3.56 * k, -3.14 * k, -4.45 * k, -4.76 * k]"
                    :itemStyle="{ borderColor : '#fff', borderWidth : '1', color : params => ['#ffc35f', '#95c166', '#95c166', '#fff', '#fff', '#95c166', '#ffc35f', '#fff', '#ffc35f', '#fff', '#fff', '#fff', '#fff'][params.dataIndex] }"
                    :lineStyle="{ normal : { color : '#4686D3' } }"
                    :markLine="{
                        silent:true,
                        symbolSize:0,
                        label:{
                            show:false
                        },
                        lineStyle:{
                            color:'#4686D3'
                        },
                        data: [ {
                            yAxis: -3.215384615384615
                        } ]
                    }"
                    :symbol="`circle`"
                    :symbolSize="7"
                    :yAxisIndex="1"

                    @click="clickHandle"
                >
                </i-line>
            </i-series>

            <i-tooltip
                :axisPointer="{ type : 'shadow' }"
                :trigger="'axis'"
            >
            </i-tooltip>
            <i-x-axis
                :data="['武林', '西湖', '江干', '拱墅', '下沙', '滨江', '萧山', '富阳', '余杭', '建德', '淳安', '桐庐', '临安']"
                :axisLabel="{ color: '#fff', formatter : ( value ) => value.split('').join('\n'), margin : 14 }"
                :axisLine="{ onZero : false, show : false }"
                :axisTick="{ show : false }"
                :splitLine="{ show : false }"
                :type="`category`"
                :triggerEvent="true"

                @click="click"
            ></i-x-axis>
            <i-y-axis
                :type="`value`"
                :axisTick="{ show : false }"
                :name="`万`"
                :axisLine="{ show : false }"
                :axisLabel="{ color: '#fff', showMinLabel : true, showMaxLabel : true }"
                :nameTextStyle="{ color: '#fff', padding: [ 0, 25, 0, 0 ]}"
                :splitLine="{ show : false }"
                :min="value => Math.floor(value.min-Math.abs(value.min*0.1))"
                :max="value => value.max < 0 ? Math.ceil(value.max+Math.abs(value.max*0.1)) : Math.ceil(value.max+(value.max*0.1))"
            ></i-y-axis>
            <i-y-axis
                :type="`value`"
                :axisTick="{ show : false }"
                :name="`%`"
                :axisLine="{ show : false }"
                :axisLabel="{ color: '#fff', showMinLabel : true, showMaxLabel : true }"
                :nameTextStyle="{ color: '#fff', padding: [ 0, 0, 0, 25 ]}"
                :splitLine="{ show : false }"
                :min="value => (value.min-Math.abs(value.min)*0.1).toFixed(2)"
                :max="value => value.max < 0 ? (value.max+Math.abs(value.max*0.1)).toFixed(2) : (value.max+(value.max*0.1)).toFixed(2)"
            ></i-y-axis>
        </i-echarts>
    </div>


    <div id="demo-2" class="demo">
        <i-echarts
            :color="['rgba(116,180,255,0.4)', '#FFF']"
        >
            <i-grid
                :bottom="`2%`"
                :containLabel="true"
                :left="0"
                :right="0"
                :top="`80px`"
            >
            </i-grid>
            <i-legend
                :data="['宽带日受理', '宽带日竣工']"
                :textStyle="{ color: '#fff' }"
            >
            </i-legend>
            <i-bar
                :data="['79', '97', '107', '68', '62', '61', '244', '202', '207', '71', '38', '58', '109']"
                :itemStyle="{ normal : { color : 'rgba(116,180,255,0.4)' } }"
                :barWidth="`10px`"
                :name="`宽带日受理`"

                @click="clickHandle"
            >
            </i-bar>
            <i-bar
                :data="['178', '243', '201', '137', '163', '109', '503', '207', '533', '96', '58', '110', '151']"
                :itemStyle="{ normal : { color : '#FFF' } }"
                :barWidth="`10px`"
                :name="`宽带日竣工`"

                @click="clickHandle"
            >
            </i-bar>
            <i-tooltip
                :axisPointer="{ type : 'shadow' }"
                :trigger="'axis'"
            >
            </i-tooltip>
            <i-x-axis
                :data="['武林', '西湖', '江干', '拱墅', '下沙', '滨江', '萧山', '富阳', '余杭', '建德', '淳安', '桐庐', '临安']"
                :axisLabel="{ color: '#fff', formatter : ( value ) => value.split('').join('\n') }"
                :axisLine="{ show : false }"
                :axisTick="{ show : false }"
                :splitLine="{ show : false }"
                :type="`category`"
            ></i-x-axis>
            <i-y-axis
                :type="`value`"
                :axisTick="{ show : false }"
                :name="`户/户`"
                :axisLine="{ show : false }"
                :axisLabel="{ color: '#fff' }"
                :nameTextStyle="{ color: '#fff', padding: [ 0, 25, 0, 0 ]}"
                :splitLine="{ show : false }"
            ></i-y-axis>
        </i-echarts>
    </div>

    <div id="demo-3" class="demo">
        <i-echarts
            :color="['rgba(116,180,255,0.4)', '#FFF']"
        >
            <i-grid
                :bottom="`2%`"
                :containLabel="true"
                :left="0"
                :right="0"
                :top="`80px`"
            >
            </i-grid>
            <i-legend
                :data="['宽带日受理', '宽带日竣工']"
                :textStyle="{ color: '#fff' }"
            >
            </i-legend>
            <i-bar
                :data="['79', '97', '107', '68', '62', '61', '244', '202', '207', '71', '38', '58', '109']"
                :itemStyle="{ normal : { color : 'rgba(116,180,255,0.4)' } }"
                :barWidth="stack_width"
                :name="`宽带日受理`"
                :stack="`宽带`"
            >
            </i-bar>
            <i-bar
                :data="['178', '243', '201', '137', '163', '109', '503', '207', '533', '96', '58', '110', '151']"
                :itemStyle="{ normal : { color : '#FFF' } }"
                :barWidth="stack_width"
                :name="`宽带日竣工`"
                :stack="stack_name"
            >
            </i-bar>
            <i-tooltip
                :axisPointer="{ type : 'shadow' }"
                :trigger="'axis'"
            >
            </i-tooltip>
            <i-x-axis
                :data="['武林', '西湖', '江干', '拱墅', '下沙', '滨江', '萧山', '富阳', '余杭', '建德', '淳安', '桐庐', '临安']"
                :axisLabel="{ color: '#fff', formatter : ( value ) => value.split('').join('\n') }"
                :axisLine="{ show : false }"
                :axisTick="{ show : false }"
                :splitLine="{ show : false }"
                :type="`category`"
            ></i-x-axis>
            <i-y-axis
                :type="`value`"
                :axisTick="{ show : false }"
                :name="`户/户`"
                :axisLine="{ show : false }"
                :axisLabel="{ color: '#fff' }"
                :nameTextStyle="{ color: '#fff', padding: [ 0, 25, 0, 0 ]}"
                :splitLine="{ show : false }"
            ></i-y-axis>
        </i-echarts>
    </div>
</div>
</template>

<script>
import echarts from 'echarts'
import serialize from 'serialize-javascript'
export default {
    data () {
        return {
            echarts,
            stack_name : "宽带",
            stack_width : "16px",

            test_arr : [ 1.1, 1.2, 1.3 ],
        }
    },
    components : {
    },
    methods : {
        random () {
        },
        rename () {
            this.stack_name = ( this.stack_name == "宽带" ? "非宽带" : "宽带" );
            this.stack_width = ( this.stack_name == "宽带" ? "16px" : "10px" );
        },
        clickHandle(n, s ) {
            window.alert( `${n.seriesName}-${n.name}-${n.value}` );
        },
        clickThen () {
            this.test_arr = [ 1.1 ];
        },
        click ( n ) {
            window.alert( `${n.value}` );
        }
    }
}
</script>

<style>

.chart-area {
}

.demo {
    background-color: #0c1a2b;
    width: 490px;
    height: 300px;
    margin-bottom: 15px;

}
.demo.white {
    background-color: white;
}

</style>
