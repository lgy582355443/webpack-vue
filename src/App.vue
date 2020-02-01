<template>
  <div class="App">
    <div class="nav">
      <router-link class="nav-item" :to="{path:'/Home'}" tag="div">Home</router-link>
      <router-link class="nav-item" :to="{path:'/About'}" tag="div">about</router-link>
    </div>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import footers from '@/components/Footer.vue'
export default {
  name: "App",
  components: {
    footers
  },
  props: {},
  data() {
    return {
      text: ""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "./assets/style/app.scss";
.App {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .nav {
    display: flex;
    justify-content: center;
    .nav-item {
      padding: 0 20px;
      font-size: 30px;
      color: $baseColor;
      border-right: 2px solid $baseColor;
      &:nth-child(2) {
        border-right: none;
      }
    }
  }
}
</style>