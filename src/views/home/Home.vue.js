import { __decorate } from "tslib";
class {
};
"home" >
    class {
    };
"indexinput-box" >
    class {
    };
"indexinput";
confirm - type;
"done";
placeholder = "请输入";
type = "text";
v - model.lazy;
"inputtext";
value = "inputtext" /  >
    /div>
    < !-- < van - pull - refresh;
v - model;
"isLoading";
"onRefresh" > -- >
    -- < /van-pull-refresh>-->
    < van - skeleton;
row = "20";
v - ;
if ( = "isLoading" /  >
    id)
     = "vdoms" > /div>
        < van - loading;
color = "#ff6464";
v - show;
"busy" /  >
;
badges = "badges" > /Tabbar>
    < /div>
    < /template>
    < script;
lang = "ts" >
;
import { Component, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '../../components/HelloWorld.vue'; // @ is an alias to /src
import CreateDom from '../../utils/createdom.js';
import { filterXSS } from "xss";
import Tabbar from '../../components/tabbar.vue';
import { A, B } from '../../utils/dom';
import draggable from 'vuedraggable';
const createDom = new CreateDom();
const pageStartTime = Date.now();
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
        const aa = new A('哈哈哈').sayName();
        const bb = new B('哈哈哈').sayName();
        const per = window.performance.timing;
        setTimeout(() => {
            console.log('DNS查询耗时' + this.getsec(per.domainLookupEnd - per.domainLookupStart));
            console.log('TCP链接耗时' + this.getsec(per.connectEnd - per.connectStart));
            console.log('request请求响应耗时' + this.getsec(per.responseEnd - per.responseStart));
            console.log('dom渲染耗时' + this.getsec(per.domComplete - per.domInteractive));
            console.log('白屏时间' + this.getsec(Date.now() - pageStartTime));
            console.log('domready可操作时间' + this.getsec(per.domContentLoadedEventEnd - per.fetchStart));
        });
        console.log(Object.prototype.toString.call(true).slice(8, -1));
        this.sorts();
    }
    //手写一个sort
    sorts() {
        const insertSort = (arr, start = 0, end) => {
            end = end === arr.length ? end : arr.length;
            for (let i = start; i < end; i++) {
                const e = arr[i];
                let j;
                for (j = i; j > start && arr[j - 1] > e; j--)
                    arr[j] = arr[j - 1];
                arr[j] = e;
            }
            return arr;
        };
        console.log(insertSort([5, 11, 23, 54, 0, 22, 12, 43, 9], 0, 99));
    }
    getsec(time) {
        return time >= 1000 ? (time / 1000).toFixed(2) + 's' : time + 'ms';
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
    created() {
        //this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。
        this.$nextTick(() => {
            // 进入nexTick
            const boo = document.body; // 获取滚动条的dom
            //console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
            boo.onscroll = () => {
                // 获取距离顶部的距离
                const scrollTop = boo.scrollTop;
                // 获取可视区的高度
                const windowHeight = boo.clientHeight;
                // 获取滚动条的总高度
                const scrollHeight = boo.scrollHeight;
                console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
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
        this.isLoading = true;
        const topicsChild = localStorage.getItem('topics');
        const topics = JSON.parse(topicsChild);
        if (topics && topics.length > 0) {
            createDom.createDom(topics); //重新渲染
            this.indexList = topics;
            this.isLoading = false;
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
            Tabbar,
            draggable
        },
        provide: {
            "foo": '哈哈哈哈哈哈',
        }
    })
], Home);
export default Home;
/script>
    < style;
scoped;
lang = "scss" >
        .van - skeleton__content;
{
    column - count;
    2;
    column - gap;
    16;
    px;
    background - color;
    rgb(245, 246, 250);
}
van - skeleton__title, .van - skeleton__row;
{
    height: 180;
    px;
    padding: 0.32;
    rem;
    margin - top;
    0;
    important;
    border: solid;
    2;
    px;
    white;
    font - size;
    36;
    px;
    display: inline - block;
    width: -webkit - fill - available;
    important;
}
/style>;
//# sourceMappingURL=Home.vue.js.map