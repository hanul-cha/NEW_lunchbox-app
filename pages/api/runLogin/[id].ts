// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../src/server/restFul";

client.connect((err) => {
  if (err) {
    console.error("connection error");
  } else {
    console.log("success!");
  }
});

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve, reject) => {
    client.query("SELECT * FROM box_user", (err, result) => {
      if (err) {
        reject(`${err}`);
      } else {
        const userLIst = result.rows;
        resolve(res.status(200).json({ userLIst }));
      }
    });
  });
}


/* 
해당 api는 runlogin과 데이터를 주고 받으면서 로그인 로직을 구현할것임
아이를 받아와 거기에 해당하는 정보들을 가져오고 
다시 날려줄것임 runlogin에서는 그 정보를 바탕으로 아이디와 패스워드가 맞는지 확인할것이다
*/