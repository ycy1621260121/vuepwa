import { __decorate } from "tslib";
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { filterXSS } from "xss";
let Common = class Common extends Vue {
    constructor() {
        super(...arguments);
        //定义
        this.name = `es6 class`;
    }
    //传回父级
    comClick() {
        this.$store.commit('changeParent', '找到了');
        return {
            nameString: filterXSS(this.name)
        };
    }
};
__decorate([
    Prop()
], Common.prototype, "collapsed", void 0);
__decorate([
    Emit()
], Common.prototype, "comClick", null);
Common = __decorate([
    Component({
    // filters: {
    //     toFixed: (num: number, fix = 2) => {
    //         return num.toFixed(fix);
    //     }
    // }
    })
], Common);
export default Common;
//# sourceMappingURL=common.js.map