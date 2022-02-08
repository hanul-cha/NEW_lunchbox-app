import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import PleaseLoginAction from "../src/actions/PleaseLoginAction";

const PleaseLogin = () => {
    const dispatch = useDispatch();
    const removePoP = () => {
        dispatch(PleaseLoginAction(false));
    }
  return (
    <>
      <div className="pleaseLogin">
        <Box
          sx={{
            "& > :not(style)": {
              m: 0,
              width: 400,
              height: 500,
            },
          }}
        >
          <Paper elevation={1}>
            <div className="pleaseLoginCard">
              <h2>로그인이 필요한 서비스 입니다.</h2>
              <p>로그인 하시겠습니까?</p>

              <button onClick={removePoP}>취소</button>
              <button>확인</button>
            </div>
          </Paper>
        </Box>
      </div>
      <style jsx>
        {`
          .pleaseLogin {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 20000;
            width: 400px;
            height: 500px;
          }
          .pleaseLoginCard {
              padding:10px;
          }
          .pleaseLoginCard h2 {
            font-size: 25px;
          }
        `}
      </style>
    </>
  );
};

export default PleaseLogin;
