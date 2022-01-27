import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../src/actions/ProductAction";
import { RootReducerType } from "../../src/Store";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const testReducer = useSelector((state:RootReducerType) =>state.ProductReducer)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(fetchProductData())
    
  },[])

  console.log(testReducer)
 


  return <div>post:{id}</div>;
};

export default Product;
