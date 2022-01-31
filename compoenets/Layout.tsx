import NavBar from "./NavBar";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";
import BasketReducer from "../src/reducers/BasketReducer";
import { ADD_BASKETLIST } from "../src/actions/BasketActionType";

const Layout = ({ children }: any) => {
  const [local, setLocal] = useState<string | undefined | null>();
  const [basketCount, setBasketCount] = useState(0);
  useEffect(() => {
    const mylocal = window.localStorage.getItem("userName");
    setLocal(mylocal);
  }, []);

  


  return (
    <>
      <div className="main_wrapper">
        <div className="topNav">
          {local ? (
            <div>
              <Link href="/userInfo">
                <a>내정보</a>
              </Link>
            </div>
          ) : (
            <div>
              <Link href="/login">
                <a>로그인</a>
              </Link>
              <Link href="/join">
                <a>회원가입</a>
              </Link>
            </div>
          )}
        </div>

        <div className="basket">
          <CardTravelIcon sx={{ fontSize: 40 }} />
          <div className="basketCount">
            <h3>{basketCount}</h3>
          </div>
        </div>

        <div className="header">
          <div className="main-logo">
            <h1>hanul</h1>
            <div className="main-icon">
              <h4>BO</h4>
              <LocalDiningIcon sx={{ fontSize: 40 }} />
            </div>
          </div>
          <NavBar />
        </div>
        <div>{children}</div>
      </div>
      <style jsx>{`
        .main_wrapper {
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
          background: #fff;
          min-height: 100vh;
          height: 100%;
          position: relative;
        }
        .topNav {
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .basket {
          position: fixed;
          bottom: 10px;
          margin-left: 10px;
          background: #9AD0EC;
          padding: 10px;
          border-radius: 50%;
          z-index: 1000;
        }
        .basketCount {
          background: #fff;
          position: absolute;
          top: 15%;
          right: 15%;
          width: 25px;
          height:25px;
          display: grid;
          align-items: center;
          border-radius: 50px
        }
        .basketCount h3 {
          font-size: 20px;
          text-align: center;
          font-weight: 600;
        }
        .header {
          background: #9AD0EC;
          border-radius: 0 0 20px 20px;
        }
        .main-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
        }
        .main-logo > h1 {
          font-weight: 600;
          font-size: 20px;
        }
        .main-icon {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .main-icon h4 {
          font-weight: 600;
          font-size: 40px;
          margin-right: -2px;
        }
        
      `}</style>
    </>
  );
};

export default Layout;
