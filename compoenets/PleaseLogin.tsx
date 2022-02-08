import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import PleaseLoginAction from "../src/actions/PleaseLoginAction";
import { useRouter } from "next/router";

const PleaseLogin = () => {
    const dispatch = useDispatch();
    const route = useRouter();
    const removePoP = () => {
        dispatch(PleaseLoginAction(false));
    }
    const runLogin = () => {
        dispatch(PleaseLoginAction(false));
        route.push('/login')
    }
  return (
    <>
      <div className="pleaseLogin">
        
          <Paper elevation={1}>
            <div className="pleaseLoginCard">
              <h2>로그인이 필요한 서비스 입니다.</h2>
              <p>로그인 하시겠습니까?</p>

              <button className="removeBtn" onClick={removePoP}>취소</button>
              <button onClick={runLogin}>확인</button>
            </div>
          </Paper>
        
      </div>
      <style jsx>
        {`
          .pleaseLogin {
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 20000;
            background: red;
          }
          .pleaseLoginCard {
              padding:20px;
          }
          .pleaseLoginCard h2 {
            font-size: 25px;
            margin-bottom:10px;
          }
          .pleaseLoginCard p {
            margin-bottom:10px;
          }
          .pleaseLoginCard>button {
              border:none;
              border-radius:5px;
              color:#fff;
              background:#00aaff;
              padding:5px 10px;
          }
          .removeBtn {
              margin-right: 10px;
          }
        `}
      </style>
    </>
  );
};

export default PleaseLogin;
