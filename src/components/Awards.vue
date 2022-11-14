<template>
  <div>
    <div class="awards">
      <div class="title">獎項</div>
      <div class="container">
        <div class="info">
          <div class="awards_item" :class="item.id" v-for="(item, index) in awards" :key="index">
            <img :src="item.img" class="awards_img" alt="">
            <div class="awards_info" v-html="item.info"></div>
          </div>
        </div>
        <div class="awards_description">以上皆提供完賽數位獎狀</div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgPath from '../assets/js/ImgPath';

export default {
  data () {
    return {
      awards: [
        {
          id: 'award_1',
          img: ImgPath.award_1,
          info: '每個關卡各1組'
        },
        {
          id: 'award_2',
          img: ImgPath.award_2,
          info: '每個關卡各2名，<br/>設計1名、前端1名'
        },
        {
          id: 'award_3',
          img: ImgPath.award_3,
          info: '每個關卡個人組十位<br/>、團體組十組'
        }
      ]
    }
  },
  mounted(){
    this.scroll()
  },
  methods:{
    scroll () {
      const srollTL = this.gsap.timeline({
        scrollTrigger: {
          // 決定scrolltrigger要以哪一個元素作為觸發基準點
          trigger: ".awards",
          // start & end標記點，單純方便瀏覽動畫開始與結束點
          markers: false,
          //決定動畫播放是否依賴視窗滾動
          scrub: true,
          start: '-=100',
          end: 'top',
          //將區塊鎖定
          pin: false,
        },
      })

      srollTL.to('.award_1', { yPercent: "100", opacity: 1 })
      srollTL.to('.award_2', { yPercent: "100", opacity: 1 }, '<')
      srollTL.to('.award_3', { yPercent: "100", opacity: 1 }, '<')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/color';

.awards {
  .title {
    padding: 42px 0;
    font-family: 'Noto Serif TC';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 86px;
    color: white;
    text-align: center;
    background-color: $primary;
  }
  .container {
    margin: 92px auto 12px auto;
    width: 1200px;
    height: auto;
    .info {
      margin-bottom: 92px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .awards_item {
        margin-right: 20px;
        width: 386px;
        &:last-child {
          margin-right: 0;
        }
        .awards_img {
          display: block;
        }
        .awards_info {
          height: 76px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 38px;
          color: $primary;
          text-align: center;
        }
      }
    }
    .awards_description {
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 52px;
      text-align: center;
      color: $primary;
    }
  }

  .award_1 {
    transform: translateY(-100%);
    opacity: 0;
  }
  .award_2 {
    transform: translateY(-100%);
    opacity: 0;
  }
  .award_3 {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>