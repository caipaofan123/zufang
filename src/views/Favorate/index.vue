<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <van-card
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      thumb="https://img0.baidu.com/it/u=4027294468,2844812981&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
      v-for="(item, index) in favorateList"
      :key="index"
    >
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item1, index) in item.tags"
          :key="index"
          >{{ item1 }}</van-tag
        >
      </template>
    </van-card>
  </div>
</template>

<script>
import { getFavrList } from '@/apis/favorate'
export default {
  name: 'ZufangFavorate',

  data() {
    return {
      favorateList: []
    }
  },
  created() {
    this.getFavrList()
  },
  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.push('/profile')
    },
    async getFavrList() {
      const { data } = await getFavrList()
      console.log(data)
      this.favorateList = data.body
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon) {
    color: #fff;
  }
}
</style>
