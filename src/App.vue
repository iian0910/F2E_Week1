<template>
  <div style="overflow-x:hidden">
    <Loading v-if="isLoading"/>
    <Navbar/>
    <!-- 版頭 -->
    <MV/>
    <div class="main">
      <div class="container">
        <!-- 活動內容 -->
        <Event/>
        <!-- 活動時程 -->
        <Schedule/>
        <!-- 獎項 -->
        <Awards/>
        <!-- 大神直播 -->
        <LiveShow
          @showSponsorBlock="showSponsorBlock"
        />
        <!-- 贊助單位 -->
        <Sponsor v-if="isShowBlock"/>
      </div>
    </div>
  </div>
</template>

<script>
import Awards from './components/Awards.vue';
import Event from './components/Event.vue';
import LiveShow from './components/LiveShow.vue';
import Loading from './components/Loading.vue';
import MV from './components/MV.vue';
import Navbar from './components/Navbar.vue';
import Schedule from './components/Schedule.vue';
import Sponsor from './components/Sponsor.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    MV,
    Event,
    Schedule,
    Awards,
    LiveShow,
    Sponsor,
    Loading
  },
  data () {
    return {
      isLoading: true,
      isShowBlock: false
    }
  },
  mounted(){
    window.addEventListener('load', this.loadingState)
    document.querySelector('body').style.overflow = 'hidden'
  },
  methods: {
    loadingState () {
      this.isLoading = false
      document.querySelector('body').style.overflow = ''
    },
    showSponsorBlock () {
      this.isShowBlock = true
    }
  }
}
</script>

<style>
.main {
  width: 100%;
  background-image: url('./assets/images/contain_bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.container {
  margin: 0 auto;
  width: 1280px;    
}
</style>
