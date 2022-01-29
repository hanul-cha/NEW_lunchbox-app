// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { client } from "../../../src/server/restFul";

client.connect((err) => {
  if (err) {
    console.error("connection error");
  } else {
    console.log("success!");
  }
});


export default async function detailProduct(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const productID = req.query.id
  return new Promise((resolve, reject) => {
    client.query(`SELECT * FROM product_list WHERE product_id = ${productID}`, (err, result) => {
      if (err) {
        reject(`${err}`);
      } else {
        const productList = result.rows;
        resolve(res.status(200).json({ productList }));
      }
    });
  });
}
