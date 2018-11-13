<template>
  <div>

  </div>
</template>
<script>
  import {user} from '~/utils/localStorage.js'
  import {API} from '~/utils/config.js'
  import ajax from '~/plugins/axios.js'

  export default {
    async asyncData (asb) {
      return  {
        userInfo : user.get('isLogin')
      }
    },
    data(){
      return {
        userInfo:{},
      }
    },
    computed: {
    },
    created(){
      let _this = this
      _this.userInfo = user.get('isLogin')

    },
    mounted () {

    },
    methods: {

    },
    watch: {
      '$route': function (to, from) {

      }
    },
    head () {
      return {
      }
    },
    components: {
    }
  }


</script>
<style scoped>
</style>
