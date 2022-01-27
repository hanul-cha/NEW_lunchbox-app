import type { NextPage } from "next";
import GlobalTitle from "../compoenets/GlobalTitle";
import MaterialMediaCard from "../compoenets/MaterialMediaCard";

interface productListType {
  explanation: string;
  img: string;
  name: string;
  new_product: boolean;
  price: number;
  product_id: number;
  product_type: string;
}

interface allProductType {
  allproduction: {
    productList: productListType[];
  };
}

const allProduct: NextPage<allProductType> = ({ allproduction }) => {
  const noodleList = allproduction.productList.filter(
    (type) => type.product_type == "noodle"
  );

  const riceList = allproduction.productList.filter(
    (type) => type.product_type == "rice"
  );

  const drinkList = allproduction.productList.filter(
    (type) => type.product_type == "drink"
  );

  return (
    <>
      <GlobalTitle title="모든 제품" />
      <div className="allProduct">
        <div className="selectAll active">
          {allproduction.productList.map((list, i) => {
            return <MaterialMediaCard info={list} key={i} />;
          })}
        </div>
        <div className="noodle">
          {noodleList.map((list, i) => {
            return <MaterialMediaCard info={list} key={i} />;
          })}
        </div>
        <div className="rice">
          {riceList.map((list, i) => {
            return <MaterialMediaCard info={list} key={i} />;
          })}
        </div>
        <div className="drink">
          {drinkList.map((list, i) => {
            return <MaterialMediaCard info={list} key={i} />;
          })}
        </div>
      </div>
      <style jsx>{`
          
      `}</style>
    </>
  );
};

export default allProduct;

export const getServerSideProps = async () => {
  const allproduction = await (
    await fetch("http://localhost:3000/api/product")
  ).json();
  return {
    props: {
      allproduction,
    },
  };
};
