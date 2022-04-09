
function request(url: string, options?: any) {
  const controller = new AbortController()
  const { signal } = controller

  const mergeOptions = {
    ...options,
    headers: {
      'content-type': 'application/json'
    },
    signal
  }

  const task: any = fetch(url, mergeOptions)
  task.abort = () => controller.abort()

  return task.then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject('请求异常')
    }
  })
}

const get = (url: string) => request(url)

const http = {
  get,
  request,
}

export default http