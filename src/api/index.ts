import http from "../utils/http"

export const reqGetQQUserInfo = (qq: string) => {
  return http.get(`https://api.uomg.com/api/qq.info?qq=${qq}`)
}