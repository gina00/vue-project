<template>
<main>
    <h4>用户增量</h4>
    <section v-if="expand.bar">
        <figure>
            <chart :options="bar" :init-options="initOptions" ref="bar" theme="ovilia-green" auto-resize />
        </figure>
        <p v-if="seconds <= 0"><small>Loaded.</small></p>
        <p v-else><small>Data coming in <b>{{ seconds }}</b> second{{ seconds > 1 ? 's' : '' }}...</small></p>
        <p><button @click="refresh" :disabled="seconds > 0">Refresh</button></p>
    </section>
</main>
</template>

<script>
import qs from 'qs'
import ECharts from '../ECharts.vue'
import 'echarts/lib/chart/bar'
import getBar from '../../data/bar'
import theme from '../../data/theme.json'
// registering custom theme
ECharts.registerTheme('ovilia-green', theme)
export default {
    components:{
        name:'expandbar'
    },
    data() {
        let options = qs.parse(location.search, {
            ignoreQueryPrefix: true
        })
        return {
            options,
            bar: getBar(),
            expand: {
                bar: true
            },
            initOptions: {
                renderer: options.renderer || 'canvas'
            },
        }
    },
    methods: {
        refresh() {
            // simulating async data from server
            this.seconds = 3
            let bar = this.$refs.bar
            bar.showLoading({
                text: '正在加载',
                color: '#4ea397',
                maskColor: 'rgba(255, 255, 255, 0.4)'
            })
            let timer = setInterval(() => {
                this.seconds--
                    if (this.seconds === 0) {
                        clearTimeout(timer)
                        bar.hideLoading()
                        bar.mergeOptions(getBar())
                    }
            }, 1000)
        },
    }
}
</script>

<style scoped>
*,
*::before,
*::after
{
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 3em 0 0;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #666;
  text-align: center;
}
pre{
    background-color:#f9f9f9;
  box-shadow:0 1px 2px rgba(0,0,0,.125);
}

</style>
