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
  basketList: BasketType[];
  productList: ProductType[];
}

const BasketBTN: NextPage<BasgetBTNpropType> = ({
  basketList,
  productList,
}) => {
    
  const totalPrice = basketList.reduce(function add(sum, currValue){
      if(typeof currValue.price === "number"){
        return sum + currValue.price
      } else {
          return 0
      }
  }, 0);
  console.log(totalPrice);

  const runorder = () => {
    
  }


  return (
    <>
      <button onClick={runorder}>
        <h2>총 주문 금액 : {totalPrice}원</h2>
        <h2>주문하러 가기</h2>
      </button>
    </>
  );
};

export default BasketBTN;
