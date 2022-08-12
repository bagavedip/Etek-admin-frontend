import Axios from "axios";
const SERVER_API_URL =
  process.env.REACT_APP_SERVER_API || "http://netrum.localhost:8000/";

  export function axiosGet(url, params = {}) {
    return new Promise(async (resolve, reject) => {
      var config = {
        headers: {
          Authorization: `Bearer ${(localStorage.getItem("token"))}`
        },
        cancelToken: params && params.cancelToken ? params.cancelToken : null
      };
      await Axios.get(SERVER_API_URL + url, 
        config
         )
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  export function axiosLoginPost(url, body = {}) {
    return new Promise(async (resolve, reject) => {
      // var config = {
      //   headers: {
      //     Authorization: `Bearer ${(localStorage.getItem("token"))}`
      //   },
      // };
      await Axios.post(SERVER_API_URL + url, body,
        // config
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  export function axiosPost(url, body = {}) {
    return new Promise(async (resolve, reject) => {
      var config = {
        headers: {
          Authorization: `Bearer ${(localStorage.getItem("token"))}`
        },
      };
      await Axios.post(SERVER_API_URL + url, body, 
        config
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  export function axiosPut(url, body = {}) {
    return new Promise(async (resolve, reject) => {
      var config = {
        headers: {
          Authorization: `Bearer ${(localStorage.getItem("token"))}`
        },
      };
      await Axios.put(SERVER_API_URL + url, body,
        config
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  export function axiosPatch(url, body = {}) {
    return new Promise(async (resolve, reject) => {
      var config = {
        headers: {
          Authorization: `Bearer ${(localStorage.getItem("token"))}`
        },
      };
      await Axios.patch(SERVER_API_URL + url, body, 
        config
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  export function axiosDelete(url) {
    return new Promise(async (resolve, reject) => {
      var config = {
        headers: {
          Authorization: `Bearer ${(localStorage.getItem("token"))}`
        },
      };
      await Axios.delete(SERVER_API_URL + url,
        config
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  
