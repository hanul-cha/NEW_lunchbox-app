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
