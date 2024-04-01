import axios from 'axios'

export default async function request({ url, method, auth, data }, login) {
    let headers = { "Content-Type": "application/json" };
    if (auth === true) {
      const token = localStorage.getItem("token");
      headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      };
    }
    try {
  
      const res= await axios({
        method,
        url,
        data,
        headers,
      });
      console.log(res);
      return res;
    } catch (err) {
      if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.error &&
        err.response.data.error.statusCode === 401
      ) {
        localStorage.removeItem("token");
        if (!login) window.location.href = "/login";
      }
      throw err;
    }
  }
