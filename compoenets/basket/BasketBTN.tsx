import React from "react";
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../../src/Store";
import PleaseLoginAction from "../../src/actions/PleaseLoginAction";

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
  const userReducer = useSelector((state:RootReducerType) => state.UserReducer.user)
  const dispatch = useDispatch();
  
  const totalPrice = basketList.reduce(function add(sum, currValue){
      if(typeof currValue.price === "number"){
        return sum + currValue.price
      } else {
          return 0
      }
  }, 0);
  console.log(userReducer);

  const runorder = () => {
    if(userReducer == null){
      dispatch(PleaseLoginAction(true));//로그인 한 유저가 없으면 팝업 활성화
    }
  }


  return (
    <>
      <button className="basketBtn" onClick={runorder}>
        <h2>총 주문 금액 : {totalPrice}원</h2>
        <h2>주문하러 가기</h2>
      </button>
      <style jsx>{`
        .basketBtn {
          width:100%;
          border:none;
          background:#00aaff;
          border-radius:5px;
          padding:20px
        }  
        .basketBtn h2 {
          color:#fff;
          font-size:20px;
        }
        .basketBtn h2:first-child {
          margin-bottom:10px;
        }
      `}</style>
    </>
  );
};

export default BasketBTN;
