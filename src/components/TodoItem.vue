<template>
    <div class="todoitem" :title="details" @click="emptyClick">
        <div v-if="!empty" class="action-container">
            <label class="cursor-pointer" for="finished">{{finishedLabel}}</label>
            <input
                    class="cursor-pointer"
                    type="checkbox"
                    name="finished"
                    id="finished"
                    :checked="finished"
                    @change.stop="onChange"
            >
        </div>
        <div v-if="!empty" class="content" @click="onClick">
            <div class="title">{{title}}</div>
            <div class="time">创建时间: {{time}}</div>
        </div>
        <div v-if="!empty" class="close-container">
            <button v-if="!empty" class="close" @click="deleteClick">×</button>
        </div>
        <div v-else class="empty">+</div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    export default Vue.extend({
        props: {
            id: Number,
            title: String,
            details: String,
            time: String,
            finished: Boolean,
            empty: Boolean
        },
        methods: {
            onClick() {
                this.$emit('click');
            },
            emptyClick() {
                if (this.empty) {
                    return this.$emit('emptyClick');
                }
                return;
            },
            deleteClick() {
                this.$emit('deleteClick');
            },
            onChange({
                         target: {checked: finished},
                     }: {
                target: { checked: boolean };
            }) {
                this.$emit('change', {id: this.id, finished});
            },
        },
        computed: {
            finishedLabel(): string {
                return this.finished ? '完成' : '未完成';
            },
        },
    });
</script>
<style lang="css">
    @import "../style/scss/css/index.css";
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
