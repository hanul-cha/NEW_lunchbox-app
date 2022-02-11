import type { NextPage } from "next";
import { useEffect, useState } from "react";
import GlobalTitle from "../compoenets/GlobalTitle";
import { TextField, Button, Alert, AlertTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";
import RunLogin from "../src/moduls/login/runLogin";
import UserAction from "../src/actions/UserAction";

const Login: NextPage = () => {
  const [id, setId] = useState("");
  const [psword, setpsword] = useState("");
  const [failAlert, setFailAlert] = useState(false);

  const userReducer = useSelector(
    (state: RootReducerType) => state.UserReducer
  );
  const dispatch = useDispatch();

  /* console.log(userReducer) */ //로그인 정보가 들어있는 리듀서

  useEffect(() => {
    if (failAlert) {
      setTimeout(() => {
        setFailAlert(false);
      }, 3000);
    }
  }, [failAlert]);

  useEffect(() => {
    return () => {
      setFailAlert(false);
    };
  }, []);
  const pushBtn = async () => {
    const runLoginCheck = new RunLogin({ id, psword });
    const response = await runLoginCheck.getUser();
    console.log(response);
    if (response.success && response.data) {
      //로그인 성공
      dispatch(UserAction(response.data));
    } else {
      setFailAlert(true);
    }
  };
  const pushRemoveBtn = () => {};

  return (
    <>
      <GlobalTitle title="Login" />
      {failAlert && (
        <div className="login_fail">
          <Alert severity="error" sx={{ width: "100%-32px" }}>
            <AlertTitle>로그인 실패</AlertTitle>
            <strong>아이디 또는 비밀번호를 확인해 주세요</strong>
          </Alert>
        </div>
      )}
      <div className="loginField">
        <TextField
          className="textField"
          id="outlined-id"
          label="id"
          variant="outlined"
          placeholder="user id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <TextField
          className="textField"
          id="outlined-password"
          label="password"
          variant="outlined"
          name="psword"
          type="password"
          placeholder="user password"
          value={psword}
          onChange={(e) => setpsword(e.target.value)}
        />

        <Button className="login_btn" variant="outlined" onClick={pushBtn}>
          login
        </Button>
        <Button
          className="login_btn"
          variant="outlined"
          onClick={pushRemoveBtn}
        >
          탈퇴
        </Button>
      </div>
      {/* <div className="runLoginTestWrapper">
        <Button sx={{width:400}} className="runLoginTest" variant="outlined" onClick={pushTest}>
          테스트용 아이디로 로그인하기
        </Button>
      </div> */}
      <style jsx>{`
        .login_fail {
          position: absolute;
          max-width: 600px;
          width: 100%;
          z-index: 1000;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </>
  );
};

export default Login;

/* export const getServerSideProps = async () => {}; */
