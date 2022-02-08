import type { NextPage } from "next";
import { useEffect, useState } from "react";
import GlobalTitle from "../compoenets/GlobalTitle";
import { TextField, Button, Alert, AlertTitle } from "@mui/material";
import { useSelector } from "react-redux";
import { RootReducerType } from "../src/Store";

const Login: NextPage = () => {
  const [id, setId] = useState("");
  const [psword, setpsword] = useState("");
  const [failAlert, setFailAlert] = useState(false);

  const userReducer = useSelector((state:RootReducerType) => state.UserReducer)
  /* const dispatch = useDispatch();
  dispatch(BasketAction([addBasketList])); */
  console.log(userReducer)

  setTimeout(() => {
    setFailAlert(false);
  }, 3000);

  useEffect(() => {
    return () => {
      setFailAlert(false);
    };
  }, []);
  const pushBtn = () => {

  }

  return (
    <>
      <GlobalTitle title="Login" />
      {failAlert && (
        <Alert severity="error">
        <AlertTitle>로그인 실패</AlertTitle>
        <strong>아이디 또는 비밀번호를 확인해 주세요</strong>
      </Alert>
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
          
        `}</style>
    </>
  );
};

export default Login;

/* export const getServerSideProps = async () => {}; */
