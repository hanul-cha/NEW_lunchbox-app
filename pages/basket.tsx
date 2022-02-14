import GlobalTitle from "../compoenets/GlobalTitle";
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import BasketBTN from "../compoenets/basket/BasketBTN";
import NottingBasket from "../compoenets/basket/NottingBasket";
import { PutBasketAction } from "../src/actions/BasketAction";
import axios, { AxiosResponse } from "axios";
import { BasketReducerPropType } from "../src/actions/BasketActionType";

interface AxiosResType {
  explanation: string;
  img: string;
  name: string;
  new_product: boolean;
  price: number;
  product_id: number;
  product_type: string;
}

interface AllListType extends AxiosResType {
  printNum: number;
  random: number;
  quentity:number;
  priceAll:number;
}

interface AxiosPropType {
  productList: AxiosResType[];
}

const Basket: NextPage = () => {
  const [allList, setAllList] = useState<AllListType[]>([]);
  const basketReducer = useSelector(
    (state: RootReducerType) => state.BasketReducer
  );

  const dispatch = useDispatch();
  /* console.log(basketReducer); */

  const getchDetailProduct = async (
    basketItem: BasketReducerPropType,
    i: number
  ) => {
    await axios
      .get(`http://localhost:3000/api/detailProduct/${basketItem.product_id}`)
      .then((res: AxiosResponse<AxiosPropType>) => {
        const addRes = {
          ...res.data.productList[0],
          printNum: i,
          random: basketItem.random,
          quentity: basketItem.quentity,
          priceAll: basketItem.price
        }; //비동기로 받은 제품정보에 더해줄 key

        setAllList((state) => {
          const newState = [...state, addRes];
          const sortAllList = newState.sort((a, b) => {
            return a.printNum - b.printNum;
          });
          //내림차순으로 재할당해서 리턴해줌
          return sortAllList;
        });
      });
    /* console.log(product.productList[0]) */
  }; //리듀서에 담긴 제품리스트를 비동기처리로 가져와 재할당하는 함수

  useEffect(() => {
    setAllList([]); //초기화
    basketReducer.basketList.map((basketItem, i) => {
      if (basketItem.product_id) {
        getchDetailProduct(basketItem, i);
        //인덱스 수만큼 함수 실행
      }
    });
  }, []);

  console.log(basketReducer);
  //전역 관리되고 있는 주문표
  console.log(allList);
  //주문표에 있는 id로 만든 제품 리스트
  //확인하고 싶을때 풀자

  const removeBasketList = (randomNum: number) => {
    dispatch(PutBasketAction(randomNum));
    const newAllList = allList.filter((item) => item.random !== randomNum);
    setAllList(newAllList);
  }; //제거 버튼을 누르면 아이템 리스트에서 제거하고 리듀서에서도 제거한다

  useEffect(() => {
    /* const useLocal = window.localStorage.getItem("guestBasket") */
    window.localStorage.setItem(
      "guestBasket",
      JSON.stringify(basketReducer.basketList)
    );
  }, [basketReducer.basketList]);
  //제거 버튼을 누르면 리듀서가 바뀌니 그후 반응해 로컬 스토리지에 추가해준다

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
                <div key={i} className="basketWrapper">
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
                        <div className="onlyText">
                          <h2>{list.name}</h2>
                          <p>
                            수량 : {list.quentity}개
                          </p>
                          <p>가격 : {list.priceAll}원</p>
                        </div>
                        <button
                          className="removeBasketList"
                          onClick={(e) => {
                            removeBasketList(list.random);
                          }}
                        >
                          장바구니에서 제거
                        </button>
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
        .mainDIV > h1 {
          font-size: 25px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .basketWrapper {
          padding: 20px 0;
          padding-top: 0;
        }
        .basketCard {
          display: grid;
          grid-template-columns: 140px auto;
        }
        .basketCardImg {
          width: 120px;
          height: 120px;
          place-self: start start;
          margin: 10px;
          border-radius: 5px;
          overflow: hidden;
        }
        .basketText {
          padding: 10px;
          padding-left: 0;
          display: grid;
          grid-template-rows: 80px;
        }
        .onlyText {
          display: grid;
          grid-template-rows: repeat(3, auto);
        }
        .basketText h2 {
          font-size: 20px;
        }
        .removeBasketList {
          border: none;
          background: #9179ff;
          color: #fff;
          padding: 6px;
          border-radius: 5px;
          width: 160px;
          max-width: 100%;
        }
      `}</style>
    </>
  );
};

export default Basket;

/* 
상단에서 데이터를 받아올때 오버패칭 엄청되고 있음 이거 나중에 정리해야할듯함 ㄷ
데이터를 받아올때 걸러서 가져오고 타입지정 잘해서 다시 해주는게 좋긴함
필요없는 친구들:
explanation
new_product
price
productType

근데 이거 공유하고 있는 api가 있어서 하면안되네ㄷㄷㄷㄷ
*/
