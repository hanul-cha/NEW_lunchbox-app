import axios, { AxiosResponse } from "axios";

type RunLoginBodyType = {
  id?: string;
  psword?: string;
};
interface ArrayType {
    
        user_id: string;
        password: string;
        name:string;
        joinday:string;
        address?:string|null
}
type GetUserType = {
  success: boolean;
  userLIst?: ArrayType[];
};

class RunLogin {
  body: RunLoginBodyType;
  constructor(body: RunLoginBodyType) {
    this.body = body;
  }

  async getUser() {
    const client = this.body;

    return await axios
      .post("/api/runLogin/id", {
        id: client.id,
      })
      .then((res: AxiosResponse<GetUserType, any>) => {
        console.log(res.data);
        if (res.data.success && res.data.userLIst) {
          if (res.data.userLIst[0].password == client.psword) {
            return {
              success: true,
              data: res.data.userLIst[0],
            };
          } else {
            return {
              success: false,
            };
          }
        } else {
          return {
            success: false,
          };
        }
      });
  }
}

export default RunLogin;
