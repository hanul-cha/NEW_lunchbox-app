import React from "react";
import NavBar from "./NavBar";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="main_wrapper">
        <div className="header">
          <LocalDiningIcon />
          <h4>HANUL-BOX</h4>
        </div>
        <NavBar />
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
        }
        .header {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
        }
        .header h4 {
          font-weight: 600;
          font-size: 25px;
        }
      `}</style>
    </>
  );
};

export default Layout;
