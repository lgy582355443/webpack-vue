<template>
  <div class="home">
    <p class="title">这是home页</p>
    <div class="box">
      这是vuex里的num: {{num}}
      <button @click="add">点击+1</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
  methods: {
    add() {
      this.$store.dispatch("addNum");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.home {
  .title {
    text-align: center;
    font-size: 20px;
    color: orange;
  }
  .box {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
}
</style>