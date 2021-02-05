import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import Tabbar from '../../components/tabbar.vue';
import draggable from 'vuedraggable';
let Apps = class Apps extends Vue {
    constructor() {
        super(...arguments);
        this.drag = false;
    }
    get myArray() {
        return this.$store.state.myArray;
    }
    onStart() {
        this.drag = true;
    }
    //拖拽结束事件
    onEnd() {
        this.drag = false;
        this.$store.commit('changemyArray', this.myArray);
    }
};
Apps = __decorate([
    Component({
        components: {
            Tabbar,
            draggable
        }
    })
], Apps);
export default Apps;
//# sourceMappingURL=Mine.vue.js.map