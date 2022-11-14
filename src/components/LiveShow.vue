<template>
  <div>
    <div class="showList" v-if="isHiddenYoutuberList">
      <div class="click" @click="showYoububerInfo">
        意想不到的好康<br/><span>請點擊</span>
        <div id="loading_img_click"></div>
      </div>
    </div>
    <div class="live_show" v-else>
      <div class="title">各界大神直播分享</div>
      <div class="container">
        <div class="youtuber_all">
          <div
            class="youtuber"
            :class="item.id"
            v-for="(item, index) in live"
            :key="index"
          >
            <div class="live_title">{{item.title}}</div>
            <div class="live_tag" v-html="item.describe"></div>
            <div class="live_time">{{item.liveTime}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import loding from '../assets/js/loading.json';

export default {
  data () {
    return {
      isHiddenYoutuberList: true,
      live: [
        {
          id: 'youtuber_1',
          title: '網站的動態趨勢',
          describe: '李明<br/>版塊設計創辦人兼總監',
          liveTime: '11/03(四)20:00 ~ 21:30'
        },
        {
          id: 'youtuber_2',
          title: 'jQuery 也可以做到的互動效果',
          describe: 'Leo<br/>Angular Taiwan 傳教士',
          liveTime: '11/10(四)20:00 ~ 21:30'
        },
        {
          id: 'youtuber_3',
          title: '網頁可以拖拖拉拉draggable.js 介紹',
          describe: '邱繼緯<br/>前端工程師',
          liveTime: '11/17(四)20:00 ~ 21:30'
        },
        {
          id: 'youtuber_4',
          title: '互動式網頁設計工程師該具備哪些技能？',
          describe: '吳哲宇<br/>墨雨互動設計創辦人',
          liveTime: '11/24(四)20:00 ~ 21:30'
        }
      ]
    }
  },
  mounted(){
    const anim = lottie.loadAnimation({
      container: document.getElementById('loading_img_click'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loding
    })

    anim.play()
  },
  methods: {
    showYoububerInfo () {
      this.isHiddenYoutuberList = false
      this.$emit('showSponsorBlock')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/color';



.showList {
  width: 100%;
  height: 100vh;
  position: relative;
  .click {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Noto Serif TC';
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 103px;
    text-align: center;
    color: $primary;
    cursor: pointer;
    span {
      color: $secondary;
    }
  }
  #loading_img_click {
    margin: 0 auto;
    margin-bottom: 25px;
    width: 200px;
    height: 200px;
    display: block;
    position: absolute;
    top: 60%;
    left: 60%;
  }
}
.live_show {
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
    margin: 0 auto;
    padding: 64px 0;
    width: 1064px;
    height: auto;
    .youtuber_all {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .youtuber {
        margin-right: 20px;
        margin-bottom: 52px;
        width: 522px;
        height: 738.5px;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        &:nth-child(2n) {
          margin-right: 0;
        }
        &:nth-child(3),
        &:nth-child(4) {
          margin-bottom: 0;
        }
        &.youtuber_1 {
          background-image: url('../assets/images/liveShow_bg_1.gif');
          .live_title {
            font-size: 57px;
            line-height: 62px;
          }
        }
        &.youtuber_2 {
          background-image: url('../assets/images/liveShow_bg_2.gif');
          .live_title {
            font-size: 49px;
            line-height: 62px;
          }
        }
        &.youtuber_3 {
          background-image: url('../assets/images/liveShow_bg_3.gif');
          .live_title {
            font-size: 46px;
            line-height: 62px;
          }
        }
        &.youtuber_4 {
          background-image: url('../assets/images/liveShow_bg_4.gif');
          .live_title {
            font-size: 44px;
            line-height: 62px;
          }
        }
        .live_title {
          width: 402.39px;
          height: 117.47px;
          position: absolute;
          top: 20.68px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Noto Serif TC';
          font-style: normal;
          font-weight: 900;
          color: $primary;
          text-align: center;
        }
        .live_time {
          width: 402.39px;
          height: 58.74px;
          position: absolute;
          bottom: 27.76px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 900;
          font-size: 35px;
          line-height: 67px;
          text-align: center;          
          color: $primary
        }
        .live_tag {
          width: 259px;
          height: 66px;
          background-image: url('../assets/images/liveShow_tag.svg');
          background-size: cover;
          background-repeat: no-repeat;
          padding: 7px 29.5px;
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 26px;
          text-align: center;
          color: white;
          position: absolute;
          bottom: 89.5px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>