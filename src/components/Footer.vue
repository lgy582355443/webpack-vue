<template>
  <div class="footer-main">
    <div class="footer">
      <div class="footer-icon home" >
        <div class="title-icon-wrapper">
          <span class="icon-home icon"></span>
        </div>
        <p class="footer-title"></p>
      </div>
      <div class="footer-icon shelf">
        <div class="title-icon-wrapper">
          <span class="icon-shelf icon"></span>
        </div>
        <p class="footer-title"></p>
      </div>
      <div class="footer-icon my">
        <div class="title-icon-wrapper">
          <span class="icon-my icon"></span>
        </div>
        <p class="footer-title"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.footer-main {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 200;
  box-shadow: 0 0px 5px #cccc;
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .footer-icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      .title-icon-wrapper {
        font-size: 18px;
        color: rgb(144, 144, 144);
      }
      .footer-title {
        margin-top: 5px;
        color: rgb(144, 144, 144);
      }
    }
  }
}
</style>
