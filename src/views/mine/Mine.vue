<template>
    <div class="about">
        <!--使用draggable组件-->
        <!--使用draggable组件-->
        <draggable v-model="myArray" ghostClass="ghost" chosenClass="chosen" forceFallback="true" group="people"
                   animation="1000" @start="onStart" @end="onEnd">
            <transition-group class="item-box">
                <div class="item" v-for="element in myArray" :key="element.id">
                    <i class="iconfont" v-html="element.name"></i>
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
        myArray = [
            {id: 1, name: '&#xe664;'},
            {id: 2, name: '&#xe605;'},
            {id: 3, name: '&#xe667;'},
            {id: 4, name: '&#xe67b;'},
            {id: 5, name: '&#xe6e1;'},
            {id: 6, name: '&#xe688;'}
        ];

        public onStart() {
            this.drag = true;
        }

        //拖拽结束事件
        public onEnd() {
            this.drag = false;
        }
    }

</script>
<style lang="scss" scoped>
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
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .item {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        margin: 0px 10px 0px 10px;
        border: solid 1px #eee;
        background-color: #f1f1f1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .item + .item {
        border-top: none;
        margin-top: 6px;
    }

    .item:hover {
        background-color: #ff6464;
        color: white;
        cursor: move;
    }
</style>
