<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/list">找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/news">资讯</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'ZufangIndex',

  data () {
    return {}
  },

  mounted () {},

  methods: {
  }
}
</script>

<style lang="scss" scoped></style>
