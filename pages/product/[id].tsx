import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>post:{id}</div>;
};

export default Product;
