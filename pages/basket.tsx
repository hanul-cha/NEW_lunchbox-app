import GlobalTitle from "../compoenets/GlobalTitle";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import BasketBTN from "../compoenets/basket/BasketBTN";
import NottingBasket from "../compoenets/basket/NottingBasket";

interface AllListType {
  explanation: string;
  img: string;
  name: string;
  new_product: boolean;
  price: number;
  product_id: number;
  product_type: string;
}

const Basket: NextPage = () => {
  const [allList, setAllList] = useState<AllListType[]>([]);
  const basketReducer = useSelector(
    (state: RootReducerType) => state.BasketReducer
  );

  /* console.log(basketReducer); */
  useEffect(() => {
    basketReducer.basketList.map((basketItem) => {
      if (basketItem.product_id) {
        const getchDetailProduct = async (id: number) => {
          const product = await (
            await fetch(`http://localhost:3000/api/detailProduct/${id}`)
          ).json();

          /* console.log(product.productList[0]) */
          setAllList((state) => [...state, product.productList[0]]);
        };
        getchDetailProduct(basketItem.product_id);
      }
    });
  }, []);

  console.log(basketReducer);
  //전역 관리되고 있는 주문표
  console.log(allList);
  //주문표에 있는 id로 만든 제품 리스트

  const removeBasketList = (productId:number) => {
    console.log(productId)
  }
 

  return (
    <>
      <GlobalTitle title="장바구니" />
      {allList.length == 0 ? (
        <NottingBasket />
      ) : (
        <div className="mainDIV">
          <h1>장바구니</h1>
          <div className="basket">
            {allList.map((list, i) => {
              return (
                <div key={i + 1} className="basketWrapper">
                  <Card>
                    <div className="basketCard">
                      <div className="basketCardImg">
                        <CardMedia
                          component="img"
                          image={list.img}
                          sx={{ width: 200 }}
                          alt="Live from space album cover"
                        />
                      </div>
                      <div className="basketText">
                        <h2>{list.name}</h2>
                        <p>수량 : {basketReducer?.basketList[i]?.quentity}</p>
                        <p>가격 :{basketReducer?.basketList[i]?.price}</p>
                        <button onClick={(e) => {removeBasketList(list.product_id)}}>장바구니에서 제거</button>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
          <BasketBTN
            basketList={basketReducer.basketList}
            productList={allList}
          />
        </div>
      )}

      <style jsx>{`
        .mainDIV {
          padding: 20px;
        }
        .mainDIV>h1 {
          font-size:25px;
          margin-bottom:15px;
          font-weight:600;
        }
        .basketWrapper {
          padding: 20px 0;
          padding-top: 0;
        }
        .basketCard {
          display: grid;
          grid-template-columns: 120px auto;
        }
        .basketCardImg {
          width: 100px;
          height: 100px;
          place-self: start start;
          margin: 10px;
          border-radius: 5px;
          overflow: hidden;
        }
        .basketText {
          padding: 10px;
          padding-left: 0;
        }
      `}</style>
    </>
  );
};

export default Basket;
