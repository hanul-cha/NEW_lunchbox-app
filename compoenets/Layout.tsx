import NavBar from "./NavBar";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BasketNav from "./basket/BasketNav";
import { useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";
import PleaseLogin from "./PleaseLogin";

const Layout = ({ children }: any) => {
  const pleaseLoginReducer = useSelector(
    (state: RootReducerType) => state.PleaseLoginReducer
  );

  const [local, setLocal] = useState<string | undefined | null>(null);

  useEffect(() => {
    const mylocal = window.localStorage.getItem("userName");
    setLocal(mylocal);
  }, []);
  /* 
  로컬값이 null이 아닌 그러니까 아이디가 있다면 loginAPI를 실행해 데이터(모든정보)을 가져와
  action이랑 같이 전달해줌
  */

  console.log(local);

  console.log(pleaseLoginReducer);
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

        {pleaseLoginReducer && (
          <div className="popBack">
            <PleaseLogin />
          </div>
        )}

        <BasketNav />

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
          background: #9ad0ec;
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
          height: 25px;
          display: grid;
          align-items: center;
          border-radius: 50px;
        }
        .basketCount h3 {
          font-size: 20px;
          text-align: center;
          font-weight: 600;
        }
        .header {
          background: #9ad0ec;
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
        .popBack {
          width:100%;
          height:100%;
          background-color: rgb(0, 0, 0, 0.7);
          z-index:19000;
          position:absolute;
        }
      `}</style>
    </>
  );
};

export default Layout;
