import type { NextPage } from "next";
import GlobalTitle from "../compoenets/GlobalTitle";

const Home: NextPage = () => {
  return (
    <>
      <GlobalTitle title="Home" />
      {/* <img src="https://cdn.pixabay.com/photo/2018/06/18/18/06/pasta-3483010_960_720.jpg" alt="파스타이미지" /> */}
    </>
  )
};

export default Home;

/* export const getServerSideProps = async () => {}; */
