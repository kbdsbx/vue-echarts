# Vue eCharts I

> 在Vue使用标签声明创建eCharts图表

## Install

```bash
npm install vue-charts-i --save
```

## Usage

```js
import Vue from 'vue'
import VueEchart from "vue-echart-i"

Vue.use( VueEchart );
```

```html
<i-echarts>
    <i-bar :data="data" :name="name" @click="eventHandle"></i-bar>
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
    <i-series v-for="radar in arr">
        <i-radars>
        </i-radars>
    </i-series>
    <i-grid>
        <i-tooltip></i-tooltip>
    </i-grid>
    <!-- 设置全局提示工具 -->
    <i-tooltip></i-tooltip>
    <i-x-axis></i-x-axis>
    <i-y-axis></i-y-axis>
    <i-legend></i-legend>
    <i-radar></i-radar>
</i-echarts>
```

## Versions

#### v0.1.3

- 修复部分功能失效的BUG

#### v0.2.0

- 添加line和bar的事件绑定，允许使用vue原生语法`@click="<func>"`和`v-on:click="<func>"`将鼠标事件绑定至指定组件，可以使用的事件包含：click、dblclick、mousedown、mousemove、mouseup、mouseover、mouseout

#### v0.2.1

- 新增i-series标签用于v-for循环，例：`<i-series v-for="k in array"></i-series>`

#### v0.2.2

- 修复echarts创建canvas时删除vue components占用用节点使得数据更新时插入节点失败导致系统宕机的错误
- 修复i-series标签prop不存在导致的报错

#### v0.3.0

- 添加radar雷达图表，添加radars雷达图数据描述