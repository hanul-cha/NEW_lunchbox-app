import type { NextPage } from "next";
import { useEffect, useState } from "react";
import GlobalTitle from "../compoenets/GlobalTitle";
import { TextField, Button, Alert, AlertTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";
import RunLogin from "../src/moduls/login/runLogin";
import UserAction from "../src/actions/UserAction";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [id, setId] = useState("");
  const [psword, setpsword] = useState("");
  const [failAlert, setFailAlert] = useState(false);

  const userReducer = useSelector(
    (state: RootReducerType) => state.UserReducer
  );
  const dispatch = useDispatch();
  const route = useRouter();

  /* console.log(userReducer) */ //로그인 정보가 들어있는 리듀서

  useEffect(() => {
    if (failAlert) {
      setTimeout(() => {
        setFailAlert(false);
      }, 3000);
    }
  }, [failAlert]);
  //실패 알람이 나오고나서 3초뒤에 꺼주는 useEffect

  useEffect(() => {
    return () => {
      setFailAlert(false);
    };
  }, []);
  //언마운트시 콜백함수를 큐에서 지워주기 위한 클린함수

  const pushBtn = async () => {
    const runLoginCheck = new RunLogin({ id, psword });
    const response = await runLoginCheck.getUser();
    console.log(response);
    if (response.success && response.data) {
      //로그인 성공
      dispatch(UserAction(response.data));
      window.localStorage.setItem("userInfo", JSON.stringify(response.data));
      route.back();
      //유저정보를 리듀서와 로컬스토리지에 할당한후 뒤로 보내줌
    } else {
      setFailAlert(true);
    }
  };
  /* 
  로그인 버튼을 눌렀을 때 id와 ps를 인자로 넘겨주어 클래스를 생성함
  getuser메서드를 비동기로 호출해 검사를 받아 리턴 받아온 값으로
  로그인 시킬지 알람을 켜줄지 결정함
  */

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
      </div>
      {/* <div className="runLoginTestWrapper">
        <Button sx={{width:400}} className="runLoginTest" variant="outlined" onClick={pushTest}>
          테스트용 아이디로 로그인하기
        </Button>
      </div> */}
      <style jsx>{`
        .loginField {
          display:grid;
        }
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
