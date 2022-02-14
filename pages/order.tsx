import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";

const Order: NextPage = () => {
  const userReducer = useSelector(
    (state: RootReducerType) => state.UserReducer.user
  );

  console.log(userReducer)
  return <div>order</div>;
};

export default Order;
