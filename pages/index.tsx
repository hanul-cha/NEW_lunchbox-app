import type { NextPage } from "next";
import { useEffect, useState } from "react";
import GlobalTitle from "../compoenets/GlobalTitle";

const Home: NextPage = () => {
  const [local, setLocal] = useState<string | undefined | null>(null);
  
  useEffect(() => {
    const mylocal = window.localStorage.getItem("userName");
    setLocal(mylocal);
  }, []);
  
  return (
    <>
      <GlobalTitle title="Home" />
      
    </>
  );
};

export default Home;

/* export const getServerSideProps = async () => {}; */

/* 
맨처음 보게될 페이지
이벤트나 슬라이더 같은거 넣을예정
역대 주문 리스트도 넣자
*/
