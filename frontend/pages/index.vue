<template>
  <transition name='index'>
    <div class="body index">
      <h1>这是一个nuxt项目</h1>
    </div>
  </transition>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import ajax from '~/plugins/axios.js'
import {API} from '~/utils/config.js'
import axios from 'axios'

export default {
  // ajax module as axios
  async asyncData () {
//    let seodata = await axios.post('/page/seo/info',{
//      pageKey:'index',
//    },{'withCredentials': 'true'})
//    console.log(seodata)
//    return {seo:seodata.data.data}
  },
  data(){
    return {
      showModals:false,
      texts:'asd',
      API:API,
      reportlist:[]
    }
  },
  computed: {
    ...mapState([
    ])
  },
  mounted () {
  },
  methods: {
    ...mapMutations([
    ]),
//    async getMainList(){
//      let _this = this
//      let ret = await ajax({url:_this.API.mainnewsreportlist,data:{
//        size:3,
//      }},_this)
//      if(ret.data.return_code == 1000){
//        _this.reportlist = ret.data.result
//      }
//    },
//
  },
  head () {
    return {
      title: 'nuxt-seo',
    }
  },
  components: {
  }
}
</script>
<style scoped>


</style>
