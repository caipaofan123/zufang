<template>
  <div>
    <div class="profile"></div>
    <!-- <div class="profile log" ></div> -->
    <div class="userInfo login" v-if="isShow">
       <h5>用户：{{userInfo.nickname}}</h5>
       <h6>用户：{{userInfo}}</h6>
       欢迎你
    </div>
    <div class="login" v-else>
      <van-button class="btn" round type="primary" size="small" @click="clickFn"
        >去登录</van-button
      >
    </div>
    <van-grid :column-num="3">
      <van-grid-item icon="star-o" text="我的收藏" to='/favorate'/>
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="underway-o" text="看房记录" />
      <van-grid-item icon="vip-card-o" text="成为房主" />
      <van-grid-item icon="manager-o" text="个人资料" />
      <van-grid-item icon="phone-o" text="联系我们" />
    </van-grid>
  </div>
</template>

<script>
import { getUserInfo } from '@/apis/user'
export default {
  name: 'ZufangIndex',

  data() {
    return {
      userInfo: {},
      isShow: !!this.$store.state.user.token,
      list: [
        {
          id: 1
        }
      ]
    }
  },

  created() {
    this.getUserInfo()
  },
  mounted() {},
  methods: {
    async getUserInfo() {
      const { data } = await getUserInfo()
      // console.log(res)
      this.userInfo = data.body
      // console.log(this.userInfo)
    },
    clickFn() {
      console.log(this.$store.state.user.token)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
.profile {
  width: 375px;
  height: 191px;
  background: url('@/assets/image/bg.png');
  background-size: cover;
}
.login {
  width: 318px;
  height: 165px;
  border: 1px solid #ccc;
  margin: auto;
  .btn {
    display: block;
    width: 90px;
    margin: 60px auto;
  }
}
</style>
