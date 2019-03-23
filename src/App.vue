<template>
  <div id="app">
    <ui-header :seller="sellerData"></ui-header>
    <div class="tab border-1px">
      <ul>
        <li>
          <router-link to="/goods">商品</router-link>
        </li>
        <li>
        <router-link to="/comment">评论</router-link>
        </li>
        <li>
          <router-link to="/seller">商家</router-link>
        </li>
      </ul>
    </div> 
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import uiHeader from '../src/components/ui-header'
// import uiGoods from '../src/components/ui-goods'
// import uiSeller from '../src/components/ui-seller'
// import uiComment from '../src/components/ui-comment'

export default {
  name: 'App',
  data() {
    return {
      sellerData: null,
    }
  },
  created() {
    this.getSellerData()
    // this.getGoodsData()
  },
  methods: {
    getSellerData() {
      this.$http.get('/api/seller').then((res) => {
        console.log(res.body.code ==0)
        if (res.body.code ==0 ) {
          this.sellerData = res.body.data
          // console.log(res.body.data)
        }
      })
    }
    // getGoodsData() {

    // }
  },
  components: {
    uiHeader,
    // uiGoods,
    // uiSeller,
    // uiComment
  }
}
</script>

<style lang='less'>
#app {
  .tab {
    ul {
      display: flex;
      li {
        flex: 1;
        height: 45px;
        line-height: 45px;
        text-align: center;
        .active {
          color: rgb(240,20,20)
        }
      }
    }
  }
}
</style>
