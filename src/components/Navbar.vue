<template>
  <div>
    <div class="navbar">
      <div class="container">
        <div class="logo"></div>
        <div class="nav_list">
          <div class="nav_item">關卡任務</div>
          <div class="nav_item">競賽說明</div>
          <div class="nav_item sign_up">立即報名</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted(){
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import '../assets/style/_color.scss';

.navbar {
  width: 100%;
  height: auto;
  background-color: $primary;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  .container {
    padding: 13.5px 0;
    margin: 0 auto;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    .logo {
      width: 145px;
      height: 35px;
      background-image: url('../assets/images/hex-logo.svg');
      background-size: contain;
      background-repeat: no-repeat;
    }
    .nav_list {
      display: flex;
      flex-direction: row;
      align-items: center;
      .nav_item {
        margin-right: 36px;
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: white;
        cursor: pointer;
      }
      .sign_up {
        margin-right: 0;
        padding: 6.5px 51.5px;
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 29px;
        display: inline-block;
        color: white;
        background-color: $secondary;
        border-radius: 40px;
      }
    }
  }
}
</style>