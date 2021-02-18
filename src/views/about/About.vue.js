import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import Tabbar from '../../components/tabbar.vue';
let Apps = class Apps extends Vue {
    get cartLists() {
        return this.$store.state.cartList;
    }
};
Apps = __decorate([
    Component({
        components: {
            Tabbar
        }
    })
], Apps);
export default Apps;
//# sourceMappingURL=About.vue.js.map