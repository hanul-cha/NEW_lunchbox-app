import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../src/actions/ProductAction";
import { RootReducerType } from "../../src/Store";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DoNotDisturbOffOutlinedIcon from "@mui/icons-material/DoNotDisturbOffOutlined";
import {BasketAction} from "../../src/actions/BasketAction";

interface productListType {
  explanation: string;
  img: string;
  name: string;
  new_product: boolean;
  price: number;
  product_id: number;
  product_type: string;
} //제품에 할당된 타입

interface allProductType {
  product: {
    productList: productListType[];
  };
} //현재 페이지 props type

interface LocalItemType {
  basket_id?: number|null;
  product_id?: number;
  order_id?: number|null;
  quentity?: number;
  price?:number;
}

const Product: NextPage<allProductType> = ({ product }) => {
  const [productCount, setProductCount] = useState(1);
  /* const testReducer = useSelector((state:RootReducerType) =>state.ProductReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductData())
  },[])
  console.log(testReducer) */

  const route = useRouter()

  const addCount = () => {
    setProductCount(productCount + 1);
  };
  const removeCount = () => {
    if (productCount !== 1) {
      setProductCount(productCount - 1);
    }
  };

  const productInfo = product.productList[0];
  /* const basketReducer = useSelector(
    (state: RootReducerType) => state.BasketReducer
  ); */ //전역상태리스트를 볼것임
  const dispatch = useDispatch();

  /* console.log(productInfo); */

  const addBasket = () => {
    const addBasketList = {
      basket_id: null,
      product_id: productInfo.product_id,
      order_id: null,
      quentity: productCount,
      price:productCount * productInfo.price
    };
    dispatch(BasketAction([addBasketList]));

    const useLocal = window.localStorage.getItem("guestBasket")
    if(useLocal) {
      const myLocal:LocalItemType[] = JSON.parse(useLocal);
      
      const newLocal = [
        ...myLocal,
        addBasketList
      ]
      console.log(newLocal)
      window.localStorage.setItem("guestBasket", JSON.stringify(newLocal))
    }
    
    route.push("/allProduct")
  };
  /* 
  장바구니에 추가하면
  새로운 배열을 만들어액션으로 넘겨주고
  로컬스토리지에도 추가해준다
  */

  return (
    <>
      <div className="productCard">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={productInfo.img}
              alt="green iguana"
            />
            <CardContent>
              <div className="productInfo">
                <h2>{productInfo.name}</h2>
                <p>{productInfo.explanation}</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <div className="productOption">
          <div className="price">
            <h3>가격</h3>
            <h3>{productInfo.price}원</h3>
          </div>

          <div className="countWrapper">
            <h3>수량</h3>
            <div className="addTable">
              <div onClick={removeCount}>
                {productCount == 1 ? (
                  <DoNotDisturbOffOutlinedIcon />
                ) : (
                  <RemoveCircleOutlineIcon />
                )}
              </div>
              <h3 className="addTableCount">{productCount}개</h3>
              <div onClick={addCount}>
                <AddCircleOutlineIcon />
              </div>
            </div>
          </div>
        </div>
        <button className="product_btn" onClick={addBasket}>
          <h3>{productCount}개 담기</h3>
          <h3>결제금액 : {productCount * productInfo.price}원</h3>
        </button>
      </div>
      <style jsx>{`
        .productInfo > h2 {
          margin-bottom: 8.4px;
        }
        .productCard {
          margin: 20px;
        }
        .productCard h2 {
          font-size: 20px;
          font-weight: 600;
        }
        .productCard h3 {
          font-size: 20px;
        }
        .countWrapper {
          display: grid;
          justify-content: space-between;
          grid-template-columns: auto auto;
          align-items: center;
          padding: 30px 0;
        }

        .price {
          border-bottom: 2px solid #434343;
          padding: 30px 0;
          display: grid;
          justify-content: space-between;
          grid-template-columns: auto auto;
          align-items: center;
        }

        .addTable {
          border: 1px solid #434343;
          border-radius: 50px;
          height: 50px;
          display: grid;
          align-items: center;
          grid-template-columns: 40px auto 40px;
        }
        .addTable > * {
          margin: 0 auto;
        }
        .product_btn {
          background: #00aaff;
          border: none;
          border-radius: 5px;
          width: 100%;
          padding: 20px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          cursor: pointer;
          align-items: center;
        }
        .product_btn h3 {
          color: white;
        }
        .product_btn:hover {
          background: #0084ff;
        }
      `}</style>
    </>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const product = await (
    await fetch(`http://localhost:3000/api/detailProduct/${id}`)
  ).json();
  return {
    props: {
      product,
    },
  };
};
