//命名空间
declare namespace Utils {
    export interface Light {
        userName?: string;
    }

    export interface Mixinios {
        name?: string;
    }

    export interface LightIn {
        collapsed?: boolean;
        inputtext?: string;
        isClick?: number;
        indexList?: any;
        busy?: boolean;
        drag?: boolean;
    }

    export interface Commoditys {
        commodity?: string;
        nameString?: string;
    }

    export interface Stores {
        token?: string;
        productData?: any;
        parents?: string;
        isLogin?: boolean;
        includeList?: any[];
        cartList?: any[];
        myArray?: any[]
    }
}
