import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.68.132:8089';
axios.defaults.timeout = 5000;
Vue.use(Vuex);
import VuexPersistence from 'vuex-persist'; //永久存储
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});
export const mutations = {
    setToken(state, data) {
        state.token = data;
    },
    setProductData(state, data) {
        state.productData = data;
    },
    changeParent(state, data) {
        state.parents = data;
    }
};
export const actions = {
    //获取云开发token
    async getAccessToken(context) {
        await axios
            .get('/getAccessToken', {})
            .then((res) => {
            context.commit('setToken', res.data.access_token);
        })
            .catch((err) => {
            console.log(err);
        });
    },
    //获取云开发数据
    async getProductData(context, payload) {
        await axios.post('/getProductData?token=' + encodeURIComponent(payload.token))
            .then((res) => {
            //if (payload.success) payload.success(res); //同步回调
            context.commit('setProductData', res);
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
const store = {
    state: {
        token: '',
        productData: [],
        parents: '还哈哈哈',
        isLogin: true
    },
    mutations,
    actions,
    plugins: [vuexLocal.plugin]
};
export default new Vuex.Store(store);
//# sourceMappingURL=index.js.map