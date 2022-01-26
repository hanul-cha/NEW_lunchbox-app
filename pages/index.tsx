import type { NextPage } from "next";
import GlobalTitle from "../compoenets/GlobalTitle";

const Home: NextPage = () => {
  return (
    <>
      <GlobalTitle title="Home" />
      <div className="test"></div>
      <style jsx>{`
        .test {
          height: 1400px;
        }
      `}</style>
    </>
  );
};

export default Home;

/* export const getServerSideProps = async () => {}; */
