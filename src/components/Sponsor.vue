<template>
  <div>
    <div class="sponsor">
      <div class="assist">
        <div class="assist_content">
          <img src="../assets/images/footer_logo_jira.svg" class="assist_img img_1" alt="">
          <img src="../assets/images/footer_logo_confluence.svg" class="assist_img img_2" alt="">
          <img src="../assets/images/footer_logo_miro.svg" class="assist_img img_3" alt="">
          <img src="../assets/images/footer_logo_dottedsign.svg" class="assist_img img_4" alt="">
        </div>
      </div>
      <div class="sponsor_block">
        <div class="title">贊助單位</div>
        <div class="sponsor_list">
          <img src="../assets/images/event_logo_1.svg" class="logo" alt="">
          <img src="../assets/images/event_logo_2.svg" class="logo" alt="">
          <img src="../assets/images/event_logo_3.svg" class="logo" alt="">
        </div>
        <div class="statement">六角日報 © Code: Alex  /  Design: KT</div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/color';

.sponsor {
  .assist {
    width: 100%;
    height: 96px;
    background-color: white;
    .assist_content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .assist_img {
        display: block;
        margin-right: 51px;
        image-rendering: -webkit-optimize-contrast;
        &:last-child {
          margin-right: 0;
        }
        &.img_1 {
          width: 165px;
          height: 55px;
        }
        &.img_2 {
          width: 288px;
          height: 36px;
        }
        &.img_3 {
          width: 203px;
          height: 64px;
        }
        &.img_4 {
          width: 273px;
          height: 66px;
        }
      }
    }
  }
  .sponsor_block {
    padding: 60px 0 8px 0;
    background-color: $primary;
    color: white;
    .title {
      margin-bottom: 50px;
      font-family: 'Noto Serif TC';
      font-style: normal;
      font-weight: 900;
      font-size: 60px;
      line-height: 86px;
      text-align: center;
    }
    .sponsor_list {
      padding: 0 66px;
      margin-bottom: 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        display: block;
      }
    }
    .statement {
      padding: 10px 0;
      width: 100%;
      background-color: $primary;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      color: white;
    }
  }
}
</style>