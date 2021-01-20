import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {filterXSS} from "xss";

@Component({
    // filters: {
    //     toFixed: (num: number, fix = 2) => {
    //         return num.toFixed(fix);
    //     }
    // }
})
export default class Common extends Vue implements Utils.Mixinios {
    //定义
    public name = `es6 class`;
    @Prop() collapsed!: boolean | string;

    //传回父级
    @Emit()
    public comClick() {
        this.$store.commit('changeParent', '找到了')
        return {
            nameString: filterXSS(this.name)
        };
    }
}
