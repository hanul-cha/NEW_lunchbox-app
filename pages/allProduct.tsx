import type { NextPage } from "next";
import GlobalTitle from "../compoenets/GlobalTitle";
import MaterialMediaCard from "../compoenets/MaterialMediaCard";

const allProduct: NextPage = () => {
  return (
    <>
      <GlobalTitle title="모든 제품" />
      <MaterialMediaCard  />
    </>
  );
};

export default allProduct;

/* export const getServerSideProps = async () => {}; */
