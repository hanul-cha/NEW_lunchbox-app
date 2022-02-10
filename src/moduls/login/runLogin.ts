import axios from "axios";

type RunLoginBodyType = {
  id: string;
  psword: string;
};

class RunLogin {
  body: RunLoginBodyType;
  constructor(body: RunLoginBodyType) {
    this.body = body;
  }

  async getUser() {
    const client = this.body;
    try {
      await axios
        .post("/api/runLogin/id", {
          id: client.id,
        })
        .then((res) => {
          console.log(res.data);
          return res.data;
        });
    } catch (err) {
      return false;
    }
  }
}

export default RunLogin;
