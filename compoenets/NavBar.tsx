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
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        .active {
          color: tomato;
        }
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default NavBar;
