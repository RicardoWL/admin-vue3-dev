import request from '@/utils/request'

/**
 * 获取通用能力列表
 * @param data
 * @returns {Promise<AxiosResponse<T>>}
 */
function getGeneralList(data) {
  return request.post('?service=App.Hrm.GetEvaluationGeneralList', data)
}

export { getGeneralList }
