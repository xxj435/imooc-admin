import request from "@/utils/request.js";

// 登录
export function login(data) {
  return request({
    url: "/sys/login",
    method: "post",
    data,
  });
}

// 获取用户信息
export function getUserInfo() {
  return request({
    url: "/sys/profile",
  });
}
