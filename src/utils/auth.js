import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

// 设置本地存储时间戳
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now()) // 设置为当前时间
}

// 获取时间戳
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

// 是否超时
export function isCheckTimeout() {
  // 当前时间戳
  var currentTime = Date.now();

  // 拿到登录时的时间戳
  var timeStamp = getItem(TIME_STAMP)

  // 用目前的时间减去登录时的时间 是否大于两个小时 返回boolean
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
