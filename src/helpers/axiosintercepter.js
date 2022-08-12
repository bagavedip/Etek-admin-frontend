Api.interceptors.request.use(
    async config => {
      const appToken = await getData('token')
      if (appToken) {
        config.headers.Authorization = 'Bearer ' + appToken
      } else {
        console.log('error, token gk masuk')
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )