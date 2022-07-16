<template>
  <div>
    <van-nav-bar
      class="navtop"
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-form class="form" @submit="login">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="usernameRules"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="passwordRules"
      />
      <div style="margin: 26px">
        <van-button class="code-btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <a href="#/registe">还没有账号，去注册~</a>
    </van-form>
  </div>
</template>

<script>
import { usernameRules, passwordRules } from './Rules'
import { login } from '@/apis/user'
export default {
  name: 'ZufangIndex',

  data () {
    return {
      username: '',
      password: '',
      usernameRules,
      passwordRules
    }
  },

  mounted () {},

  methods: {
    onClickLeft () {
      this.$router.push('/profile')
    },
    async login () {
      const res = await login(this.username, this.password)
      console.log(res)
      try {
        this.$router.push('/profile')
        this.$store.commit('setUser', res.data.body)
        this.$toast.success('登录成功')
      } catch (error) {
        this.$toast.fail('登录失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.navtop {
  background-color: #21b97a;
  height: 45px;
  :deep(.van-nav-bar__title) {
    color: #fff;
    font-size: 18px;
  }
  :deep(.van-icon) {
    color: #fff;
  }
}
.form {
  margin-top: 21px;
  text-align: center;
  .van-field {
    height: 60px;
    width: 100%;
    padding: 2px 0;
    padding: 18px 18px;
    border: 0;
    color: #000;
    font-size: 17px;
    background-color: transparent;
  }
  .code-btn {
    // width: 345px;
    background: #1cb676;
  }
  a {
    background: transparent;
    text-decoration: none;
    color: #666;
    font-size: 14px;
  }
}
</style>
