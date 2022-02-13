import React, { useEffect } from "react";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../../src/Store";
import { useRouter } from "next/router";

interface LocalItemType {
  basket_id?: number|null;
  product_id?: number;
  order_id?: number|null;
  quentity?: number;
  price?:number;
}

const BasketNav = () => {
  const route = useRouter()
  const basketReducer = useSelector((state:RootReducerType) => state.BasketReducer)
  const dispatch = useDispatch()
  
  const pushBasket = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    route.push("/basket")
  }

  const basketLength = basketReducer.basketList.length
  //담긴 배열의 길이로 장바구니 숫자를 구현
  /* console.log(basketReducer.basketList) */

  useEffect(() => {
    const useLocal = window.localStorage.getItem("guestBasket")
    if(useLocal){
      const myLocal:LocalItemType[] = JSON.parse(useLocal);
      if(myLocal.length !== 0){
        console.log(myLocal)
      }
    }
  },[])
  return (
    <>
      <div className="basket" onClick={e => pushBasket(e)}>
        <CardTravelIcon sx={{ fontSize: 40 }} />
        <div className="basketCount">
          <h3>{basketLength}</h3>
        </div>
      </div>
      <style jsx>{`
        .basket {
          position: fixed;
          bottom: 10px;
          margin-left: 10px;
          background: #9ad0ec;
          padding: 10px;
          border-radius: 50%;
          z-index: 1000;
        }
        .basketCount {
          background: #fff;
          position: absolute;
          top: 15%;
          right: 15%;
          width: 25px;
          height: 25px;
          display: grid;
          align-items: center;
          border-radius: 50px;
        }
        .basketCount h3 {
          font-size: 20px;
          text-align: center;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default BasketNav;
