import { __decorate } from "tslib";
class {
};
"about" >
    v - ;
if ( = "cartLists.length>0" >
    v - )
    for ( = "(item,index) in cartLists"; v - bind; )
        : key = "index";
class {
}
"about-list" >
    class {
    };
"left-img" >
    src;
"../../assets/logo.png";
alt = "图片" >
    /div>
    < div;
class {
}
"right-con" >
    class {
    };
"right-con-title" > 商品;
{
    {
        item.commodity;
    }
}
/div>
    < div;
class {
}
"right-con-price" > 价格;
{
    {
        item.unitprice;
    }
}
/div>
    < /div>
    < /li>
    < /ul>
    < van - skeleton;
title: row = "3";
v - ;
if ( = "cartLists.length == 0")
    style = "padding-top: 24px" /  >
        /Tabbar>
        < /div>
        < /template>
        < script;
lang = "ts" >
;
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
/script>
    < style;
lang = "scss";
scoped >
        .about - list;
{
    width: 702;
    px;
    margin: 24;
    px;
    background - color;
    #f5f6fa;
    display: flex;
    flex - direction;
    row;
    justify - content;
    flex - start;
    left - img;
    {
        width: 200;
        px;
        height: 200;
        px;
        img;
        {
            width: 200;
            px;
            height: 200;
            px;
            display: block;
        }
    }
}
right - con;
{
    display: flex;
    flex - direction;
    column;
    justify - content;
    space - between;
    right - con - title;
    {
        align - self;
        flex - start;
        font - size;
        24;
        px;
    }
    right - con - price;
    {
        margin - top;
        20;
        px;
        align - self;
        flex - start;
    }
}
/style>;
//# sourceMappingURL=About.vue.js.map