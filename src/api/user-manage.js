import request from '@/utils/request';

// 获取用户列表数据
export const getUserManageList = params => {
  return request({
    url: '/user-manage/list',
    params
  })
}

/**
 * 批量导入
 */
export const userBatchImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}
