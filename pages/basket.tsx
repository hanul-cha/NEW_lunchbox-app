import GlobalTitle from "../compoenets/GlobalTitle";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import BasketBTN from "../compoenets/basket/BasketBTN";

const Basket: NextPage = () => {
  const [allList, setAllList] = useState<any[]>([]);
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
  console.log(allList);

  return (
    <>
      <GlobalTitle title="장바구니" />
      <div>
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
                  </div>
                </div>
                <BasketBTN basketList={basketReducer.basketList} productList={allList} />
              </Card>
            </div>
          );
        })}
        </div>
        <style jsx>{`
          
          .basketWrapper {
            padding: 20px;
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
      </div>
    </>
  );
};

export default Basket;
