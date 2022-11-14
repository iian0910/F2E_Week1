<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="main">
          <div class="rectangle"></div>
          <div class="people">
            <div class="bonus">
              <div class="personal">
                個人獎<span>$3,000</span>
              </div>
              <div class="group">
                團體獎<span>$10,000</span>
              </div>
            </div>
          </div>
          <div class="scroll_down"></div>
          <div class="main_info">
            <h3 class="title">THE F2E</h3>
            <h4 class="sub_title">前端工程師和介面設計師，攜手合作拿獎金</h4>
            <p class="note">羨慕別人的酷酷網頁動畫？<br/>滿足不了同事的許願？<br/>動畫技能樹太雜無從下手？</p>
          </div>
          <div class="join">
            <div class="join_count">
              <div class="count_title">報名總人數</div>
              <div class="count_num">1158</div>
              <div class="count_title">人</div>
            </div>
            <div class="join_count">
              <div class="count_title">個人賽人數</div>
              <div class="count_num">1052</div>
              <div class="count_title">人</div>
            </div>
            <div class="join_count">
              <div class="count_title">團體賽人數</div>
              <div class="count_num">41</div>
              <div class="count_title">人</div>
            </div>
          </div>
        </div>
      </div>
      <div class="paper_top"></div>
      <div class="paper_bottom_L"></div>
      <div class="paper_bottom_R"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted(){
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    this.scroll()
  },
  methods: {
    scroll () {
      const srollTL = this.gsap.timeline({
        scrollTrigger: {
          // 決定scrolltrigger要以哪一個元素作為觸發基準點
          trigger: ".section",
          // start & end標記點，單純方便瀏覽動畫開始與結束點
          markers: false,
          //決定動畫播放是否依賴視窗滾動
          scrub: true,
          //將區塊鎖定
          pin: true,
        },
      })
      
      // 動畫順序
      srollTL.to('.paper_top', { yPercent: "-40" })
      srollTL.to('.paper_bottom_R', { yPercent: "25" },)
      srollTL.to('.paper_top', { yPercent: "-80"}, '<')
      srollTL.to('.paper_bottom_R', { yPercent: "70"}, '<')
      srollTL.to('.paper_bottom_L', { yPercent: "40"},)
      srollTL.to('.people', { bottom: "-50%"}, '<')
      srollTL.to('.paper_bottom_L', { yPercent: "80"})
      srollTL.to('.people', { bottom: "0"}, '<')
      srollTL.to('.rectangle', { display: "block"})
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/_color.scss';

.section {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/image_2.svg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  .container {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    position: relative;
    .main {
      width: 1200px;
      height: 597px;
      background-image: url('../assets/images/Rectangle.svg');
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: calc(50% + 35px);
      left: 50%;
      transform: translate(-50%, -50%);
      .rectangle {
        padding-top: 18%;
        width: 352.11px;
        height: 0;
        background-image: url('../assets/images/Rectangle_1.svg');
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: -25px;
        right: -22.5px;
        display: none;
      }
      .people {
        width: 672.27px;
        height: 562px;
        background-image: url('../assets/images/people.svg');
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -100%;
        left: 50%;
        transform: translateX(-42%);
        .bonus {
          width: 100%;
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 41px;
          color: #ffffff;
          display: flex;
          flex-direction: row;
          position: absolute;
          bottom: 29.97px;
          justify-content: center;
          .personal {
            margin-right: 22px;
          }
          .personal span,
          .group span {
            margin-left: 8.43px;
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 800;
            font-size: 56px;
            line-height: 73px;
            color: $secondary;
          }
        }
      }
      .scroll_down {
        width: 64px;
        height: 101px;
        background-image: url('../assets/images/scroll_down.svg');
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 29px;
        right: 51px;
      }
      .main_info {
        position: relative;
        top: 51px;
        left: 50px;
        color: $primary;
        .title {
          margin-bottom: 22px;
          font-family: 'EB Garamond';
          font-style: normal;
          font-weight: 800;
          font-size: 80px;
          line-height: 104px;
          &::after {
            margin-left: 9px;
            content: '4th';
            display: inline-block;
            padding: 3px 29px;
            background-color: $secondary;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 34px;
            line-height: 40px;
            color: white;
            border-radius: 14px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            position: absolute;
            top: 24px;
          }
        }
        .sub_title {
          margin-bottom: 15px;
          width: 343px;
          font-family: 'Noto Serif TC';
          font-style: normal;
          font-weight: 900;
          font-size: 42px;
          line-height: 60px;
        }
        .note {
          font-family: 'Noto Sans TC';
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 35px;
        }
      }
      .join {
        position: absolute;
        top: 215px;
        right: 61px;
        color: $primary;
        .join_count {
          display: flex;
          align-items: center;
          .count_title {
            font-family: 'Noto Sans TC';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 31px;
          }
          .count_num {
            width: 109px;
            margin-left: 16px;
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 800;
            font-size: 50px;
            line-height: 65px;
            text-align: right;
          }
        }
      }
    }
  }
  .paper_top {
  padding-top: 56%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../assets/images/paper_top.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  z-index: 11;
}
.paper_bottom_L {
  padding-top: 66%;
  position: absolute;
  bottom: -70%;
  left: -20%;
  background-image: url('../assets/images/paper_bottomLeft.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  z-index: 2;
}
.paper_bottom_R {
  padding-top: 82.75%;
  position: absolute;
  bottom: -40%;
  right: -40%;
  background-image: url('../assets/images/paper_bottomRight.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  z-index: 1;
}
}
</style>