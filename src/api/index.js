import { getRequest, postRequest } from '@/libs/axios'
// 数据字典列表
export const dictList = (params) => {
  return postRequest('/operation/sys/dict/queryByCondition', params)
}
// 数据字典中添加数据字典
export const addDict = (params) => {
  return postRequest('/operation/sys/dict/save', params)
}
// 数据字典中树状结构数据列表
export const getAllDictList = (params) => {
  return postRequest('/operation/sys/dict/findFirstLevelChildByKey', params)
}
// 菜单管理中的树状结构数据
export const menuTreeList = (params) => {
  return getRequest('/operation/sysPermission/getAllList', params)
}
// 菜单管理中的树状结构数据
export const searchPermission = (params) => {
  return getRequest('/operation/sysPermission/search', params)
}
