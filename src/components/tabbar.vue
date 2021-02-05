<template>
    <div style="position: relative;height: 50px;">
        <van-tabbar v-model="active" @change="onChange" route active-color="#ff6464">
        <van-tabbar-item replace to="/">
            <span>首页</span>
            <template #icon="props">
                <i class="iconfont">{{props.active ? '&#xe67c;' : '&#xe67c;'}}</i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item :badge="badges" replace to="/about">
            <span>购物车</span>
            <template #icon="props">
                <i class="iconfont">{{props.active ? '&#xe612;' : '&#xe612;'}}</i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/mine">
             <span>我的</span>
            <template #icon="props">
                <i class="iconfont">{{props.active ? '&#xe618;' : '&#xe618;'}}</i>
            </template>
        </van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {filterXSS} from "xss";

    @Component({
        components: {

        }
    })
    export default class Tabbar extends Vue {
        private active = '0';

        //购物车下标数量
        get badges() {
            return this.$store.state.cartList.length
        }
        created() {
            const navtoItem = localStorage.getItem('navtoItem') || '0';
            (this as any).active = navtoItem;
        }

        public onChange(index: string): void {
            localStorage.setItem('navtoItem', filterXSS(index)) //存储状态
        }
    }
</script>

<style scoped>

</style>
