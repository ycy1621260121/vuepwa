<template>
    <div class="about">
        <div class="left">LEFT</div>
        <div class="right">RIGHT</div>
        <div class="par">
            <div class="child"></div>
            <div class="child"></div>
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

    }

</script>
<style lang="scss" scoped>
    .par {
        overflow: hidden;/*加上这个可以清除浮动*/
        border: 5px solid #cccccc;
        width: 300px;
        padding: 10px;
    }

    .child {
        border: 5px solid #bbbbbb;
        width: 100px;
        height: 100px;
        float: left;
    }

    .left {
        width: 100px;
        height: 150px;
        float: left;
        background: #eeeeee;
        text-align: center;
        line-height: 150px;
        font-size: 20px;
    }

    .right {
        overflow: hidden;/*加上这个可以清除浮动*/
        height: 100px;
        background: #d3d3d3;
        text-align: center;
        line-height: 100px;
        font-size: 24px;
    }
</style>
