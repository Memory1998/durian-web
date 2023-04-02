import { request, servicePath } from '@/axios'
import JSONBigInt from 'json-bigint'

const JSONBigInt2Str = JSONBigInt({ storeAsString: true })

/**
 * 列表
 *
 * @param data
 * @returns {AxiosPromise}
 */
export function list (data) {
  return request({
    url: servicePath.sys + '/dept/list',
    method: 'post',
    data: data,
    transformResponse: [(data) => {
      return JSONBigInt2Str.parse(data)
    }]
  })
}

/**
 * 新增
 *
 * @param data
 * @returns {AxiosPromise}
 */
export function save (data) {
  return request({
    url: servicePath.sys + '/dept/create',
    method: 'post',
    data: data
  })
}

/**
 * 删除
 *
 * @param ids
 * @returns {AxiosPromise}
 */
export function del (id) {
  return request({
    url: servicePath.sys + '/dept/delete',
    method: 'delete',
    data: id
  })
}

/**
 * 修改
 *
 * @param data
 * @returns {AxiosPromise}
 */
export function modify (data) {
  return request({
    url: servicePath.sys + '/dept/modify',
    method: 'put',
    data: data
  })
}

/**
 * 部门下拉框
 *
 * @param id
 * @returns {AxiosPromise}
 */
export function selectDept (id) {
  return request({
    url: servicePath.sys + '/common/selectDept',
    method: 'get',
    params: { id: id },
    transformResponse: [(data) => {
      return JSONBigInt2Str.parse(data)
    }]
  })
}

/**
 * 校验部门编码是否重复
 *
 * @param deptCode
 * @param deptId
 * @returns {AxiosPromise}
 */
export function checkDeptCode (deptCode, deptId) {
  return request({
    url: servicePath.sys + '/dept/checkDeptCode',
    method: 'get',
    params: {
      deptId: deptId || '',
      deptCode: deptCode
    }
  })
}
