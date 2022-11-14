<template>
  <div id="loading">
    <div class="container">
      <div id="loading_img"></div>
      <div class="loading_text">努力加載中...</div>
      <div class="info">網站中收集<span>五顆</span>散落的柏蒂豆，即可獲得驚喜唷。</div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import loding from '../assets/js/loading.json';

export default {
  data () {
    return {}
  },
  mounted(){
    const anim = lottie.loadAnimation({
      container: document.getElementById('loading_img'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loding
    })

    anim.play()
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/color';

#loading {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('../assets/images/image\ 6.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 9;
}
.container {
  position: absolute;
  top: 138px;
  left: 50%;
  transform: translateX(-50%);
}
#loading_img {
  margin: 0 auto;
  margin-bottom: 25px;
  width: 200px;
  height: 200px;
  display: block;
}
.loading_text {
  margin-bottom: 59px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 26px;
  text-align: center;
  color: $primary;
}
.info {
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 45px;
  text-align: center;
  color: $primary;
  span {
    color: $secondary;
  }
}
</style>