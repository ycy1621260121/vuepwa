<template>
    <div>
        <div @click="comClick" class="hello">
            <div class="msgs">{{ msg }}</div>
            <div class="names">{{ name }}</div>
            <div class="collapsed" v-if="collapsed">collapsed</div>
        </div>
        <input type="text" class="inputmsg" v-model="inputmsg" placeholder="test" hidden>
        <button @click="saveChange" class="save">保存</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Mixins, Watch, Inject} from 'vue-property-decorator';
    import common from './mixins/common';

    @Component({})
    export default class HelloWorld extends Mixins(common) {
        @Prop() private msg!: string;
        private inputmsg = '';

        // @Inject()
        // private foo!: string;

        // 监听属性
        @Watch('inputmsg')
        onCountChanged(val: string, oldVal: string) {
            console.log('打印input', val)
        } // 监听属性

        public saveChange(): void {
            console.log('打印...', this.inputmsg)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .hello {
        padding: 24px;
        font-size: 40px;
    }
</style>
