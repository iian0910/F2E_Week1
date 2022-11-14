<template>
  <div>
    <div class="event">
      <div class="container">
        <div class="title"></div>
        <h3 class="sub_title">年度最強合作，三大關卡來襲</h3>
        <div class="bar"></div>
        <!-- 活動板塊 -->
        <div
          class="event_block"
          :class="item.id"
          v-for="(item, index) in event"
          :key="index"
        >
          <div
            class="event_main_title"
          >
            {{item.title}}
          </div>
          <div
            class="event_main_logo"
          >
            <img
              :src="item.logo_img"
              :class="item.logo_id"
              alt=""
            >
          </div>
          <div
            class="event_icon"
          >
            <img
              :src="item.icon_img"
              :class="item.icon_id"
              alt=""
            >
          </div>
          <div class="event_info">
            <div class="event_title">
              {{item.info.title}}
            </div>
            <div class="event_subTitle">
              {{item.info.subTitle}}
            </div>
            <div class="event_btn_group">
              <div
                class="btn"
                :class="btn.btn_id" v-for="(btn, bIndex) in item.btns"
                :key="bIndex"
              >
                {{btn.title}}
              </div>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
import ImgPath from '../assets/js/ImgPath';

export default {
  data() {
    return {
      event: [
        {
          id: 'event_1',
          title: '視差滾動  Parallax Scrolling',
          logo_id: 'logo_1',
          logo_img:ImgPath.BlockStudioLogo,
          icon_id:'icon_1',
          icon_img:ImgPath.eventIcon_1,
          info: {
            title: 'The F2E 活動網站設計',
            subTitle:'請參考本屆官網的首頁視差滾動技巧，並請您重新 redesign 本頁面來設計。',
          },
          btns: [
            {
              btn_id:'btn_1',
              title: '關卡攻略'
            },
            {
              btn_id:'btn_2',
              title:'投稿'
            }
          ]
        },
        {
          id: 'event_2',
          title: '線上簽署  Canvas',
          logo_id: 'logo_2',
          logo_img:ImgPath.KDANLogo,
          icon_id:'icon_2',
          icon_img:ImgPath.eventIcon_2,
          info: {
            title: '今晚，我想來點點簽',
            subTitle:'每次要 PDF 簽名都要列印出來再掃描好麻煩，自幹一個 Web 版本的簽名服務吧！',
          },
          btns: [
            {
              btn_id:'btn_1',
              title: '關卡攻略'
            },
            {
              btn_id:'btn_2',
              title:'投稿'
            }
          ]
        },
        {
          id: 'event_3',
          title: 'Scrum  JS draggable',
          logo_id: 'logo_3',
          logo_img:ImgPath.TITANSOFTLogo,
          icon_id:'icon_3',
          icon_img:ImgPath.eventIcon_3,
          info: {
            title: 'Scrum 新手村',
            subTitle:'設計關卡內容與網頁互動效果，透過頁面關卡來呈現知識點，讓挑戰者藉由你設計的內容更了解 Scrum。',
          },
          btns: [
            {
              btn_id:'btn_1',
              title: '關卡攻略'
            },
            {
              btn_id:'btn_2',
              title:'投稿'
            }
          ]
        }
      ]
    }
  },
  mounted(){
    this.scrollShow()
  },
  methods: {
    scrollShow() {
      const tl = this.gsap.timeline(
        {
          scrollTrigger: {
            trigger: ".event_1",
            markers: false,
            start: '-=500px',
            end: '-50%',
            scrub: true,
          },
        
      })
      const tl2 = this.gsap.timeline(
        {
          scrollTrigger: {
            trigger: ".event_2",
            markers: false,
            start: '-=500px',
            end: '-50%',
            scrub: true,
          },
        
      })
      const tl3 = this.gsap.timeline(
        {
          scrollTrigger: {
            trigger: ".event_3",
            markers: false,
            start: '-=500px',
            end: '-50%',
            scrub: true,
          },
        
      })

      tl.to('.event_1', {
        xPercent: '100',
        opacity: 1
      })

      tl2.to('.event_2', {
        xPercent: '-100',
        opacity: 1
      })

      tl3.to('.event_3', {
        xPercent: '100',
        opacity: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/color';
.event {
  overflow: hidden;
  .container {
    margin: 0 auto;
    padding: 102px 40px 175px 40px;
    width: 1200px;
    height: auto;
    .title {
      margin: 0 auto 46.54px auto;
      width: 590px;
      height: 146.83px;
      display: block;
      background-image: url('../assets/images/hexSchool.svg');
      background-size: cover;
      background-repeat: no-repeat;
    }
    .sub_title {
      margin-bottom: 40px;
      font-family: 'Noto Sans TC';
      font-style: normal;
      font-weight: 500;
      font-size: 43px;
      line-height: 62px;
      text-align: center;
      letter-spacing: 0.6em;
      color: $primary
    }
    .bar {
      margin-bottom: 99px;
      width: 100%;
      height: 5px;
      border-top: 4px solid $primary;
      border-bottom: 4px solid $primary;
    }
    .event_block {
      margin-bottom: 42px;
      width: 1200px;
      height: 528px;
      background-image: url('../assets/images/event_1.svg');
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      &.event_1,
      &.event_3 {
        opacity: 0;
        transform: translate(-100%, 0);
      }
      &.event_2 {
        opacity: 0;
        transform: translate(100%, 0);
      }
      &:last-child {
        margin-bottom: 0;
      }
      .event_main_title {
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 64px;
        color: white;
        position: absolute;
        top: 19px;
        left: 40px;
      }
      .event_main_logo {
        .logo_1 {
          position: absolute;
          width: 327px;
          height: 69px;
          top: 16px;
          right: 29px;
        }
        .logo_2 {
          position: absolute;
          width: 160px;
          height: 70px;
          top: 16px;
          right: 34px;
        }
        .logo_3 {
          position: absolute;
          width: 299px;
          height: 56px;
          top: 27px;
          right: 34px;
        }
      }
      .event_icon {
        .icon_1 {
          position: absolute;
          width: 313.38px;
          height: 290px;
          top: 149px;
          left: 105.97px;
        }
        .icon_2 {
          position: absolute;
          width: 218.87px;
          height: 282.84px;
          top: 138px;
          left: 120px;
        }
        .icon_3 {
          position: absolute;
          width: 297px;
          height: 245px;
          top: 172px;
          left: 103px;
        }
      }
      .event_info {
        width: 592px;
        height: auto;
        position: absolute;
        top: 142px;
        right: 102px;
        .event_title {
          margin-bottom: 14px;
          font-family: 'Noto Serif TC';
          font-style: normal;
          font-weight: 900;
          font-size: 44px;
          line-height: 63px;
          color: $primary;
        }
        .event_subTitle {
          margin-bottom: 80px;
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 35px;
          color: $primary;
        }
        .event_btn_group {
          .btn {
            display: inline-block;
            border-radius: 40px;
            font-family: 'Noto Sans TC';
            font-style: normal;
            font-weight: 350;
            font-size: 28px;
            line-height: 41px;
            cursor: pointer;
            &.btn_1 {
              padding: 11.5px 36px;
              color: $primary;
              border: 3px solid $primary;
              margin-right: 20px;
            }
            &.btn_2 {
              padding: 14.5px 63.5px;
              color: white;
              background-color: $secondary;
            }
          }
        }
      }
    }
  }
}
</style>