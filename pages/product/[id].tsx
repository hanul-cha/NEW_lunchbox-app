import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../src/actions/ProductAction";
import { RootReducerType } from "../../src/Store";


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

const Product:NextPage<allProductType> = ({product}) => {
  const router = useRouter();
  const { id } = router.query;
  /* const testReducer = useSelector((state:RootReducerType) =>state.ProductReducer)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(fetchProductData())
    
  },[])

  console.log(testReducer) */

  const productInfo = product.productList[0].explanation

  console.log(productInfo)
 


  return <div>post:{id}</div>;
};

export default Product;


export const getServerSideProps:GetServerSideProps = async (context) => {
  const id = context.params?.id
  const product = await (
    await fetch(`http://localhost:3000/api/detailProduct/${id}`)
  ).json();
  return {
    props: {
      product,
    },
  };
};
