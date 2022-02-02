import GlobalTitle from "../compoenets/GlobalTitle";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";
import { useAsync } from "react-async";
import { useState, useEffect } from "react";

const Basket: NextPage = () => {
  const [allList, setAllList] = useState<any[]>([{test:123}])
  const basketReducer = useSelector((state: RootReducerType) => state.BasketReducer);
  /* console.log(basketReducer); */
    useEffect(() => {
        basketReducer.basketList.map((basketItem) => {
            if(basketItem.product_id){
                const getchDetailProduct = async (id:number) => {
                    const product = await (
                      await fetch(`http://localhost:3000/api/detailProduct/${id}`)
                    ).json()
                    
                    /* console.log(product.productList[0]) */
                    const test = allList.concat(product.productList)
                    setAllList(i => [...i, product.productList[0]])
                    
                }; 
                getchDetailProduct(basketItem.product_id)
            }
            
        })
    },[])
    
    console.log(allList)
  
  
  return (
    <>
      <GlobalTitle title="장바구니" />
      <div>
          <h1>장바구니</h1>
      </div>
    </>
  );
};

export default Basket;
