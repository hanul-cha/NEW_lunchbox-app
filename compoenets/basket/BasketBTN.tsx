import React from "react";
import type { NextPage } from "next";

interface BasketType {
    basket_id?: number | null;
    product_id?: number;
    order_id?: number | null;
    quentity?: number;
    price?: number;
}
interface ProductType {
    explanation: string;
    img: string;
    name: string;
    new_product: boolean;
    price: number;
    product_id: number;
    product_type: string;
}

interface BasgetBTNpropType {
  basketList: BasketType[]
  productList: ProductType[]
}

const BasketBTN: NextPage<BasgetBTNpropType> = () => {
  return <div></div>;
};

export default BasketBTN;
