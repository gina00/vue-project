<template>
    
</template>
<script>
export default {
    components:{
        name:newlist
    },
    data(){
        return{}
    },
    methods:{
        fetchData:function(){
            axios.get('api/news/latest').then(
                response=>{
                    console.log(res.data);
                }
            )
        }
    }
}
</script>
<style scoped>

</style>
