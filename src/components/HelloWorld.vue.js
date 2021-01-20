import { __decorate } from "tslib";
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import common from './mixins/common';
let HelloWorld = class HelloWorld extends Mixins(common) {
    constructor() {
        super(...arguments);
        this.inputmsg = '';
    }
    // @Inject()
    // private foo!: string;
    // 监听属性
    onCountChanged(val, oldVal) {
        console.log('打印input', val);
    } // 监听属性
    saveChange() {
        console.log('打印...', this.inputmsg);
    }
};
__decorate([
    Prop()
], HelloWorld.prototype, "msg", void 0);
__decorate([
    Watch('inputmsg')
], HelloWorld.prototype, "onCountChanged", null);
HelloWorld = __decorate([
    Component({})
], HelloWorld);
export default HelloWorld;
//# sourceMappingURL=HelloWorld.vue.js.map