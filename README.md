# Vue eCharts I

> 在Vue使用标签声明创建eCharts图表

## Install

```bash
npm install vue-charts-i --save
```

## Usage

```js
import Vue from 'vue'
import VueEchart from "vue-echart-2"

Vue.use( VueEchart );
```

```html
<i-echarts>
    <i-bar :data="data" :name="name"></i-bar>
    <i-x-axis :data="xAxis"></i-x-axis>
    <i-y-axis></i-y-axis>
</i-echarts>
```

更多配置参数请参考 [echarts 配置项](http://echarts.baidu.com/option.html)

## Components

```html
<i-echarts>
    <i-bar>
        <!-- 设置此图表的专用提示工具 -->
        <i-tooltip></i-tooltip>
    </i-bar>
    <i-line>
        <i-tooltip></i-tooltip>
    </i-line>
    <i-grid>
        <i-tooltip></i-tooltip>
    </i-grid>
    <!-- 设置全局提示工具 -->
    <i-tooltip></i-tooltip>
    <i-x-axis></i-x-axis>
    <i-y-axis></i-y-axis>
    <i-legend></i-legend>
</i-echarts>
```
