import GlobalTitle from "../compoenets/GlobalTitle";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

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
          const test = allList.concat(product.productList);
          setAllList((state) => [...state, product.productList[0]]);
        };
        getchDetailProduct(basketItem.product_id);
      }
    });
  }, []);

  console.log(basketReducer);

  return (
    <>
      <GlobalTitle title="장바구니" />
      <div>
        <h1>장바구니</h1>
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
                    <p>수량 : {basketReducer?.basketList[i]?.price}</p>
                    <p>가격 :{basketReducer?.basketList[i]?.price}</p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
        <style jsx>{`
          .basketWrapper {
            padding: 20px;
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