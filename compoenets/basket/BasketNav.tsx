import React, { useEffect } from "react";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../src/Store";
import { useRouter } from "next/router";

const BasketNav = () => {
  const route = useRouter()
  const basketReducer = useSelector((state:RootReducerType) => state.BasketReducer)
  
  const pushBasket = () => {
    route.push("/basket")
  }

  const basketLength = basketReducer.basketList.length
  //담긴 배열의 길이로 장바구니 숫자를 구현
  /* console.log(basketReducer.basketList) */
  return (
    <>
      <div className="basket" onClick={pushBasket}>
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
