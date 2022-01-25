import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <nav>
        <div>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>HOME</a>
          </Link>
    
          <Link href="/">
            <a className={router.pathname === "/allmenu" ? "active" : ""}>모든메뉴</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        .active {
          color: #fff;
          font-weight: 600;
        }
        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 20px;
          
        }
        nav div {
          display: flex;
          gap: 20px;
        }
      `}</style>
    </>
  );
};

export default NavBar;

/* 
위에 userInfo로 값 바뀌는것들 싹다 테스트 해봐야함
*/
