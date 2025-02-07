

import { ReactNode } from 'react';
export interface Product {
    quantity: ReactNode | Iterable<ReactNode>;
    _id: string;
    productName: string;
    _type: "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price: number;
    description? : string;
    slug: {
        _type : "slug";
        current: string;
    }
    inventory: number;
    category: string;
    colors: {
        _type : "array";
        _key : string;
    };
    status: string;
}