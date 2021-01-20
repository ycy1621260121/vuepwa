import { __decorate } from "tslib";
import { Component, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '../../components/HelloWorld.vue'; // @ is an alias to /src
import CreateDom from '../../utils/createdom.js';
import { filterXSS } from "xss";
import Tabbar from '../../components/tabbar.vue';
import { A, B } from '../../utils/dom';
const createDom = new CreateDom();
let Home = class Home extends Vue {
    constructor() {
        super(...arguments);
        this.collapsed = false;
        this.inputtext = '';
        this.isClick = 0;
        this.indexList = [];
        this.busy = false;
        this.isLoading = false;
        this.badges = '1';
    }
    get parentsin() {
        return this.$store.state.parents;
    }
    get getProductData() {
        return this.$store.state.productData;
    }
    //computed
    get getToken() {
        return this.$store.state.token;
    }
    async mounted() {
        localStorage.setItem('badges', '9');
        this.getData();
        this.handBottom();
        const aa = new A('哈哈哈').sayName();
        const bb = new B('哈哈哈').sayName();
    }
    onRefresh() {
        localStorage.removeItem('topics');
        this.isClick = 0;
        this.getData();
    }
    typeClick() {
        //枚举
        // enum Color {Red = "#ff6464", Yellow = "#ffff00", Blue = "#0000ff"}
        // const ncolor: Color = Color.Yellow;
        // console.log(ncolor)
        const indexListData = this.indexList;
        createDom.typeClick(indexListData.slice(0, 2));
    }
    // 监听属性
    onCountChanged(val, oldVal) {
        console.log('success', filterXSS(val), filterXSS(oldVal));
        this.changeText(filterXSS(val));
    } // 监听属性
    //监听子组件传回的参数 对象：object
    commonClick(obj) {
        console.log(obj);
        //不能使用(obj as object)
        //this.changeText((<any>obj).nameString)//可以用这种方式做类型断言
        this.changeText(filterXSS(obj.nameString));
    }
    //根据传来的数据更改dom
    changeText(obj) {
        this.indexList[0].commodity = obj;
        const indexListData = this.indexList;
        createDom.createDom(indexListData.slice(0, 15));
    }
    handBottom() {
        //this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。
        this.$nextTick(() => {
            // 进入nexTick
            const bady = document.body; // 获取滚动条的dom
            // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
            bady.onscroll = () => {
                // 获取距离顶部的距离
                const scrollTop = bady.scrollTop;
                // 获取可视区的高度
                const windowHeight = bady.clientHeight;
                // 获取滚动条的总高度
                const scrollHeight = bady.scrollHeight;
                //console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                if (scrollTop + windowHeight >= scrollHeight) {
                    // 把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
                    this.handLoadMore();
                }
            };
        });
    }
    //上拉加载数据
    handLoadMore() {
        if (this.isClick == 0) {
            this.isClick = 1;
            this.busy = true;
            setTimeout(() => {
                const indexListData = this.indexList;
                createDom.createDom(indexListData.slice(0, 20));
                this.busy = false;
            }, 1000);
        }
    }
    //获取商品数据
    async getProduct(token) {
        //获取云开发数据
        await this.$store.dispatch('getProductData', { token: token }).then(() => {
            const webProduct = JSON.parse(this.getProductData.data.resp_data).webProduct.data;
            createDom.createDom(webProduct.slice(0, 15)); //this.isLoading为 true重新渲染
            this.indexList = webProduct;
            localStorage.setItem('topics', JSON.stringify(webProduct));
            this.isLoading = false;
            //this.$toast.success('success')
        });
    }
    //获取缓存，没有缓存就先去获取getAccessToken
    async getData() {
        const topicsChild = localStorage.getItem('topics');
        const topics = JSON.parse(topicsChild);
        if (topics && topics.length > 0) {
            createDom.createDom(topics); //重新渲染
            this.indexList = topics;
        }
        else {
            this.$toast.loading({ message: 'loading...', forbidClick: true });
            await this.$store.dispatch('getAccessToken').then(() => {
                this.getProduct(this.getToken);
            });
        }
    }
};
__decorate([
    Watch('inputtext')
], Home.prototype, "onCountChanged", null);
Home = __decorate([
    Component({
        components: {
            HelloWorld,
            Tabbar
        },
        provide: {
            "foo": '哈哈哈哈哈哈',
        }
    })
], Home);
export default Home;
//# sourceMappingURL=Home.vue.js.map