<template>
    <div class="about">
        <div class="mine-box">
            <img src="../../assets/logo.png" alt="logo" class="mine-img">
        </div>
        <!--使用draggable组件-->
        <draggable v-model="$store.state.myArray" ghostClass="ghost" chosenClass="chosen" forceFallback="true" group="people"
                   animation="1000" @start="onStart" @end="onEnd">
            <transition-group class="item-box">
                <div class="item" v-for="element in myArray" :key="element.id">
                    <i class="iconfont mineicon" v-html="element.name"></i>
                    <div>{{element.id}}</div>
                </div>
            </transition-group>
        </draggable>

        <Tabbar></Tabbar>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Tabbar from '../../components/tabbar.vue'
    import draggable from 'vuedraggable'

    @Component({
        components: {
            Tabbar,
            draggable
        }
    })
    export default class Apps extends Vue {
        drag = false;

        get myArray() {
            return this.$store.state.myArray
        }

        public onStart() {
            this.drag = true;
        }

        //拖拽结束事件
        public onEnd() {
            this.drag = false;
            this.$store.commit('changemyArray',this.myArray)
        }
    }

</script>
<style lang="scss" scoped>
    .mineicon{
        font-size: 60px;
    }
    .mine-box{
        background-color: #f1f1f1;
        margin-bottom: 24px;
    }
    .mine-img{
        width: 60%;
    }
    /*定义要拖拽元素的样式*/
    .drag {
        background-color: blue !important;
        border: solid 3px red;
    }

    .chosen {
        opacity: 0.4 !important;
    }

    .ghost {
        opacity: 1 !important;
    }

    .itxst {
        margin: 10px;
        text-align: left;
    }

    .col {
        width: 40%;
        flex: 1;
        padding: 10px;
        border: solid 1px #eee;
        border-radius: 5px;
        float: left;
    }

    .col + .col {
        margin-left: 10px;
    }
    .item-box{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 4px;
    }

    .item {
        width: 230px;
        height: 230px;
        border-radius: 10px;
        border: solid 1px #eee;
        background-color: #f1f1f1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 6px;
    }

    .item:hover {
        background-color: #ff6464;
        color: white;
        cursor: move;
    }
</style>
