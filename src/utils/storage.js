// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  // 如果json.parse不能解析data 则说明不是个对象
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 删除指定数据
export const removeItem = key => {
  window.localStorage.removeItem(key)
}

// 删除全部数据
export const removeAllItem = () => {
  window.localStorage.clear()
}
