// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../src/server/restFul";

interface userRows {
  user_id: string;
  name: string;
  password: string;
  joinday: string;
  address: string | null;
}

interface Data {
    result?: {
      rows?: userRows
    };

}

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
