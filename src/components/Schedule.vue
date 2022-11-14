<template>
  <div>
    <div class="schedule">
      <div class="title">賽程時間</div>
      <div class="container">
        <div class="info">
          <div class="pre_work">
            <ul>
              <li>
                <div class="pre_work_title">開始報名</div>
                <div class="pre_work_info info_1">10/13(四) 早上 11:00<br/>至 11/6(日) 晚上 23:59</div>
              </li>
              <li>
                <div class="pre_work_title">開賽</div>
                <div class="pre_work_info info_2">UI組、團體組開賽 10/31<br/>前端組開賽 11 /7</div>
              </li>
              <li>
                <div class="pre_work_title">登錄作品</div>
                <div class="pre_work_info info_3">10/31(一) 中午 12:00<br/>至11/28(一) 中午 12:00</div>
              </li>
              <li>
                <div class="pre_work_title">線上直播</div>
                <div class="pre_work_info info_4">11/3 至 11/24(每週四)</div>
              </li>
            </ul>
          </div>
          <div class="vote">
            <ul>
              <li>
                <div class="pre_work_title">初賽</div>
                <div class="pre_work_info info_1">12/05(五)</div>
              </li>
              <li>
                <div class="pre_work_title">決賽</div>
                <div class="pre_work_info info_2">12/05(五)</div>
              </li>
            </ul>
          </div>
          <div class="description">
            初選：將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單。<br/>決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於 12/23（五）公布企業得獎名單。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../assets/style/color';

.schedule {
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
    width: 1200px;
    height: auto;
    .info {
      padding: 92px 38px 92px 37px;
      width: calc(100% - 38px - 37px);
      .pre_work {
        margin-bottom: 92px;
        width: 100%;
        height: 246px;
        position: relative;
        ul {
          width: 100%;
          display: flex;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          li {
            font-family: 'Noto Sans TC';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 35px;
            text-align: center;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &::before {
              content: '';
              display: block;
              width: 48.53px;
              height: 48.53px;
              background-color: $primary;
              transform: rotate(45deg);
              position: absolute;
              z-index: 1;
            }
            &:nth-child(n+2):after {
              content: '';
              height: 5px;
              width: 100%;
              background: $primary;
              position: absolute;
              left: -50%;
            }
            .pre_work_title,
            .pre_work_info {
              color: $primary;
              position: absolute;
            }
            .pre_work_title {
              top: -98px;
              left: 50%;
              transform: translateX(-50%);
            }
            .pre_work_info {
              bottom: -138px;
              left: 50%;
              transform: translateX(-50%);
              &.info_1 {
                width: 238px;
              }
              &.info_2 {
                width: 261px;
              }
              &.info_3 {
                width: 246px;
              }
              &.info_4 {
                bottom: -103px;
                width: 235px;
              }
            }
            
          }
        }
      }
      .vote {
        margin: 0 auto 47px auto;
        width: 420px;
        height: 215px;
        position: relative;
        ul {
          width: 100%;
          display: flex;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          li {
            font-family: 'Noto Sans TC';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 35px;
            text-align: center;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &::before {
              content: '';
              display: block;
              width: 48.53px;
              height: 48.53px;
              background-color: $primary;
              transform: rotate(45deg);
              position: absolute;
              z-index: 1;
            }
            &:nth-child(n+2):after {
              content: '';
              height: 5px;
              width: 100%;
              background: $primary;
              position: absolute;
              left: -50%;
            }
            .pre_work_title,
            .pre_work_info {
              color: $primary;
              position: absolute;
            }
            .pre_work_title {
              top: -98px;
              left: 50%;
              transform: translateX(-50%);
            }
            .pre_work_info {
              bottom: -138px;
              left: 50%;
              transform: translateX(-50%);
              &.info_1 {
                bottom: -103px;
                width: 235px;
              }
              &.info_2 {
                bottom: -103px;
                width: 235px;
              }
            }
            
          }
        }
      }
      .description {
        padding: 0 41px;
        width: calc(100% - 82px);
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 41px;
        text-align: left;
        color: $primary;
      }
    }
  }
}
</style>