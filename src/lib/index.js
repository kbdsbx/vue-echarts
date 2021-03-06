import iEcharts from './components/i-echarts.vue'

import iBar from './components/series/i-bar.vue'
import iLine from './components/series/i-line.vue'
import iRadars from './components/series/i-radars.vue'
import iPie from './components/series/i-pie.vue'
import iSeries from './components/series/i-series.vue'
import ixAxis from './components/i-xAxis.vue'
import iyAxis from './components/i-yAxis.vue'
import iGrid from './components/i-grid.vue'
import iTooltip from './components/i-tooltip.vue'
import iLegend from './components/i-legend.vue'
import iRadar from './components/i-radar.vue'
import iDataZoom from './components/i-dataZoom.vue'

let components = [
    iEcharts,
    iBar,
    iRadars,
    iPie,
    iSeries,
    iLine,

    ixAxis,
    iyAxis,
    iGrid,
    iTooltip,
    iLegend,
    iRadar,
    iDataZoom,
];

let VueEcharts = {
}

VueEcharts.install = Vue => {
    if ( VueEcharts.installed ) return;

    components.map( cmp => {
        // register components;
        Vue.component( cmp.name, cmp );
    } )
}

export default VueEcharts;

