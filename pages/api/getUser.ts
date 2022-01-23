// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../src/server/restFul";

type Data = {
  name: string;
};

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
        client.query("SELECT * FROM user", (err, result) => {
            if(err){
                reject(`${err}`)
            } else {
                resolve(res.status(200).json({ result }))
            }
            
          });
    })
  
}
