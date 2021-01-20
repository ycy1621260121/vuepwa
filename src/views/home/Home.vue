<template>
    <div class="home">
        <div class="indexinput-box">
            <input class="indexinput" confirm-type="done" placeholder="请输入" type="text" v-model.lazy="inputtext"
                   value="inputtext"/>
        </div>
        <div>{{parentsin}}</div>
        <HelloWorld :collapsed="collapsed" :inputtext="inputtext" @com-click="commonClick" msg="Hello I Like You"/>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div id="vdoms"></div>
            <van-loading color="#ff6464" v-show="busy"/>
        </van-pull-refresh>


        <Tabbar :badges="badges"></Tabbar>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch, Provide} from 'vue-property-decorator';
    import HelloWorld from '../../components/HelloWorld.vue'; // @ is an alias to /src
    import CreateDom from '../../utils/createdom.js';
    import {filterXSS} from "xss";
    import Tabbar from '../../components/tabbar.vue'
    import { A, B} from '../../utils/dom'

    const createDom = new CreateDom();


    @Component({
        components: {
            HelloWorld,
            Tabbar
        },
        provide: {  //provide也可以作为一个对象进行使用.
            "foo": '哈哈哈哈哈哈',
        }
    })
    export default class Home extends Vue implements Utils.LightIn {
        public collapsed = false;
        public inputtext = '';
        public isClick = 0;
        public indexList = [];
        public busy = false;
        private isLoading = false;
        private badges = '1';



        get parentsin() {
            return this.$store.state.parents
        }


        get getProductData(): any {
            return this.$store.state.productData;
        }

        //computed
        get getToken(): string {
            return this.$store.state.token;
        }

        async mounted() {
            localStorage.setItem('badges', '9')
            this.getData();
            this.handBottom();
            const aa = new A('哈哈哈').sayName();
            const bb = new B('哈哈哈').sayName();


        }

        public onRefresh() {
            localStorage.removeItem('topics')
            this.isClick = 0;
            this.getData();
        }


        public typeClick<T>(): void {
            //枚举
            // enum Color {Red = "#ff6464", Yellow = "#ffff00", Blue = "#0000ff"}
            // const ncolor: Color = Color.Yellow;
            // console.log(ncolor)

            const indexListData: T[] = this.indexList;
            createDom.typeClick(indexListData.slice(0, 2));
        }

        // 监听属性
        @Watch('inputtext')
        onCountChanged(val: string, oldVal: string) {
            console.log('success', filterXSS(val), filterXSS(oldVal));
            this.changeText(filterXSS(val));
        } // 监听属性

        //监听子组件传回的参数 对象：object
        public commonClick<T extends Utils.Commoditys>(obj: object | null) {
            console.log(obj);
            //不能使用(obj as object)
            //this.changeText((<any>obj).nameString)//可以用这种方式做类型断言
            this.changeText(filterXSS((obj as any).nameString));
        }

        //根据传来的数据更改dom
        public changeText<T extends Utils.Commoditys>(obj: string) {
            (this.indexList[0] as T).commodity = obj;
            const indexListData: T[] = this.indexList;
            createDom.createDom(indexListData.slice(0, 15));
        }

        public handBottom() {
            //this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。
            this.$nextTick(() => {
                // 进入nexTick
                const bady: any = document.body; // 获取滚动条的dom
                // console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                bady.onscroll = () => {
                    // 获取距离顶部的距离
                    const scrollTop: number = bady.scrollTop;
                    // 获取可视区的高度
                    const windowHeight: number = bady.clientHeight;
                    // 获取滚动条的总高度
                    const scrollHeight: number = bady.scrollHeight;
                    //console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                    if (scrollTop + windowHeight >= scrollHeight) {
                        // 把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
                        this.handLoadMore();
                    }
                };
            });
        }

        //上拉加载数据
        public handLoadMore<T>() {
            if (this.isClick == 0) {
                this.isClick = 1;
                this.busy = true;
                setTimeout(() => {
                    const indexListData: T[] = this.indexList;
                    createDom.createDom(indexListData.slice(0, 20));
                    this.busy = false;
                }, 1000);
            }
        }

        //获取商品数据
        public async getProduct<T>(token: string) {
            //获取云开发数据
            await this.$store.dispatch('getProductData', {token: token}).then(() => {
                const webProduct: T[] = JSON.parse(this.getProductData.data.resp_data).webProduct.data;
                createDom.createDom(webProduct.slice(0, 15));//this.isLoading为 true重新渲染
                (this as any).indexList = webProduct;
                localStorage.setItem('topics', JSON.stringify(webProduct));
                this.isLoading = false;
                //this.$toast.success('success')
            });
        }

        //获取缓存，没有缓存就先去获取getAccessToken
        public async getData<T>() {
            const topicsChild: any = localStorage.getItem('topics');
            const topics: T[] = JSON.parse(topicsChild);
            if (topics && topics.length > 0) {
                createDom.createDom(topics);//重新渲染
                (this as any).indexList = topics;
            } else {
                this.$toast.loading({message: 'loading...', forbidClick: true})
                await this.$store.dispatch('getAccessToken').then(() => {
                    this.getProduct(this.getToken);
                });
            }
        }
    }
</script>
