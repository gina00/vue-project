<template>
<main>
    <h4>用户增量</h4>
    <chart :options="bar" :init-options="initOptions" ref="bar" theme="ovilia-green" auto-resize />
</main>
</template>

<script>
import qs from 'qs'
import getBar from '../../data/bar'
import theme from '../../data/theme.json'
export default {
    components: {
        name: 'bar',
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
    }
}
</script>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 3em 0 0;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    color: #666;
    text-align: center;
}

pre {
    background-color: #f9f9f9;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .125);
}
</style>
