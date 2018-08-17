import iEcharts from './components/i-echarts.vue'

import iBar from './components/series/i-bar.vue'
import iLine from './components/series/i-line.vue'
import ixAxis from './components/i-xAxis.vue'
import iyAxis from './components/i-yAxis.vue'
import iGrid from './components/i-grid.vue'
import iTooltip from './components/i-tooltip.vue'

let components = [
    iEcharts,
    iBar,
    iLine,
    ixAxis,
    iyAxis,
    iGrid,
    iTooltip,
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

