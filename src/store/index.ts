import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.0.104:8089';
axios.defaults.timeout = 5000;

Vue.use(Vuex);

import VuexPersistence from 'vuex-persist'//永久存储

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export const mutations = {
    setToken(state: any, data: any) {
        state.token = data;
    },
    setProductData(state: any, data: any) {
        state.productData = data;
    },
    changeParent(state: any, data: any) {
        state.parents = data;
    },
    addCart(state: any, data: any){
        const cartList = [];
        cartList.push(data);
        state.cartList = cartList;
    }
};
export const actions = {
    //获取云开发token
    async getAccessToken(context: any) {
        await axios
            .get('/getAccessToken', {})
            .then((res: any) => {
                context.commit('setToken', res.data.access_token);
            })
            .catch((err: any) => {
                console.log(err);
            });
    },
    //获取云开发数据
    async getProductData(context: any, payload: any) {
        await axios.post('/getProductData',{token:encodeURIComponent(payload.token)},{})
            .then((res: any) => {
                //if (payload.success) payload.success(res); //同步回调
                context.commit('setProductData', res);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
};
const store: StoreOptions<Utils.Stores> = {
    state: {
        token: '',
        productData: [],
        parents: '还哈哈哈',
        isLogin: true,
        cartList:[]
    },
    mutations,
    actions,
    plugins: [vuexLocal.plugin]
};

export default new Vuex.Store<Utils.Stores>(store)
