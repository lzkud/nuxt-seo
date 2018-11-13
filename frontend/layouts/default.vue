<template>
  <div>
    <MyHeader></MyHeader>
    <nuxt/>
    <MyFooter></MyFooter>
  </div>
</template>
<script>
  import MyHeader from '~/components/common/myHeader.vue'
  import MyFooter from '~/components/common/myFooter.vue'

  export default {
    data(){
      return {

      }
    },
    mounted(){

    },
    components:{
      MyHeader,
      MyFooter,
    }
  }

</script>
<style>
</style>
