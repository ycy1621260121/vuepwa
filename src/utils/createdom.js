import { h, init } from 'snabbdom';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
class Animals {
    constructor() {
        this.userName = 'Tom';
    }
    //渲染
    render(data) {
        const patch = init([
            // Init patch function with chosen modules
            classModule,
            propsModule,
            styleModule,
            eventListenersModule // attaches event listeners
        ]);
        //定义渲染的dom ID
        const container = document.getElementById('vdoms');
        //创建虚拟dom
        this.newVnode = h('div#dombox', {
            style: {
                margin: '0.32rem',
                backgroundColor: '#f5f6fa' // 如果两个单词采用驼峰写法
            }
        }, data.map((item, index) => {
            // var tds = []
            // var i
            // for (i in item) {
            //   if (item.hasOwnProperty(i)) {
            //     tds.push(h('td', {}, item[i] + ''))
            //   }
            // }
            // return h('tr', {}, tds)
            //创建li列表
            return h('li', {
                class: {
                    item: true
                },
                style: {
                    padding: '0.32rem'
                },
                props: {
                    'data-index': index,
                    'data-id': item._id,
                    'data-title': item.commodity
                },
                on: {
                    click: this.acount
                }
            }, item.commodity + '');
        }));
        //对比,有vnode时diff更新
        if (this.vnode) {
            // re-render
            patch(this.vnode, this.newVnode);
        }
        else {
            //没有dom或者跳转回home页面时
            // 初次渲染
            patch(container, this.newVnode);
        }
        // 存储当前的 vnode
        this.vnode = this.newVnode;
    }
    createDom(indexList) {
        // 2、获取到indexList后渲染dom
        this.render(indexList);
    }
    //domevent
    acount(e) {
        //console.log(e.target['data-index']?e.target['data-index']:0,e.target['data-id'],e.target['data-title'])
        let ele;
        for (ele of e.target.parentNode.childNodes) {
            if (ele.className.includes('active')) {
                ele.classList.remove('active');
            }
        }
        e.target.classList.add('active');
    }
}
class Ani extends Animals {
    constructor() {
        super();
    }
    typeClick(indexList) {
        super.createDom(indexList);
    }
}
export default Ani;
//# sourceMappingURL=createdom.js.map