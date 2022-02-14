import React from "react";

const NottingBasket = () => {
  return (
    <>
      <div className="notting">
        <div>
          <h2>텅!</h2>
          <p>비어있네요</p>
        </div>
      </div>
      <style jsx>{`
        .notting {
          display:grid;
          align-items:center;
          height:100vh;
        }
        .notting h2 {
          font-size: 200px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 20px;
        }
        .notting p {
          text-align: center;
          font-size: 40px;
        }
      `}</style>
    </>
  );
};

export default NottingBasket;
//장바구니에 아무것도 없을 때 노출시킬 컴포넌트
