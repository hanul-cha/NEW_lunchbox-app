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
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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

const Product: NextPage<allProductType> = ({ product }) => {
  const [productCount, setProductCount] = useState(1);
  /* const testReducer = useSelector((state:RootReducerType) =>state.ProductReducer)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(fetchProductData())
    
  },[])

  console.log(testReducer) */

  const productInfo = product.productList[0];

  console.log(productInfo);

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
              <div>
                <h2>{productInfo.name}</h2>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <div className="productOption">
          <h3>가격 : {productInfo.price}원</h3>
          <div className="countWrapper">
            <h3>수량</h3>
            <div className="addTable">
              <div>
                <RemoveCircleIcon />
              </div>
              <h3 className="addTableCount">{productCount}개</h3>
              <div>
                <AddCircleIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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
          grid-template-columns: auto 120px;
          align-items: center;
        }
        
        
        
        .addTable {
          border: 1px solid #434343;
          border-radius: 50px;
          height: 50px;
          display: grid;
          align-items: center;
          grid-template-columns: 40px 40px 40px;
          
        }
        .addTable > * {
          margin: 0 auto;
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
