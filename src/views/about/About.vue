<template>
    <div class="about">
        <van-skeleton title :row="3" v-if="cartLists.length == 0" style="padding-top: 24px"/>
        <div v-else>
            <div v-for="(item,index) in cartLists" v-bind:key="index" class="about-list">
                <div class="left-img">
                    <img src="../../assets/logo.png" alt="图片">
                </div>
                <div class="right-con">
                    <div class="right-con-title">商品：{{item.commodity}}</div>
                    <div class="right-con-countAll">
                        <div class="right-con-price">价格：￥{{item.unitprice}}</div>
                        <div class="right-con-count">x{{item.count || 1}}</div>
                    </div>
                </div>
            </div>
        </div>

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
        get cartLists() {
            return this.$store.state.cartList;
        }
    }

</script>
<style lang="scss" scoped>
    @import "../../style/scss/css/about.css";
</style>
