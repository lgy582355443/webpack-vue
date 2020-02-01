<template>
  <div class="about">
    <p class="title">这是about页</p>
    <div class="box">这是vuex里的num:{{num}}</div>
    <div class="wrap">
      <div class="avatar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    num() {
      return this.$store.getters.num;
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../assets/style/app.scss";
.about {
  .title {
    text-align: center;
    font-size: 20px;
    color: orange;
  }
  .box {
    margin-top: 50px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .wrap {
    width: 100%;
    height: 200px;
    @include center;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: url("../assets/images/logo.jpg") center / cover;
    }
  }
}
</style>