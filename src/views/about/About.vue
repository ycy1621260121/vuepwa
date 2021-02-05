<template>
    <div class="about">
        <ul v-if="cartLists.length>0">
            <li v-for="(item,index) in cartLists" v-bind:key="index" class="about-list">
                <div class="left-img">
                    <img src="../../assets/logo.png" alt="图片">
                </div>
                <div class="right-con">
                    <div class="right-con-title">商品：{{item.commodity}}</div>
                    <div class="right-con-price">价格：￥{{item.unitprice}}</div>
                </div>
            </li>
        </ul>
        <van-skeleton title :row="3" v-if="cartLists.length == 0" style="padding-top: 24px"/>
        <Tabbar></Tabbar>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Tabbar from '../../components/tabbar.vue'

    @Component({
        components: {
            Tabbar
        }
    })
    export default class Apps extends Vue {
        get cartLists(){
            return this.$store.state.cartList;
        }
    }

</script>
<style lang="scss" scoped>
    .about-list {
       -webkit-transform:translate3d(250px,250px,250px)
  rotate3d(250px,250px,250px,-120deg)
  scale3d(0.5,0.5,0.5);
      width: 702px;
      margin: 24px;
      background-color: #f5f6fa;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .left-img {
        width: 200px;
        height: 200px;
        img {
          width: 200px;
          height: 200px;
          display: block;
        }
      }
    }

    .right-con {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .right-con-title {
          align-self: flex-start;
          font-size: 24px;
        }
        .right-con-price{
            margin-top: 20px;
            align-self: flex-start;
        }
      }

</style>
