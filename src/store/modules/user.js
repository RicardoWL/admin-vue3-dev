// import { message } from 'ant-design-vue'

const state = {
  username: '',
  avatar: '',
}
const getters = {
  username: (state) => state.username,
  avatar: (state) => state.avatar,
}
const mutations = {
  /**
   * @description 设置用户名
   * @param {*} state
   * @param {*} username
   */
  setUsername(state, username) {
    state.username = username
  },
  /**
   * @description 设置头像
   * @param {*} state
   * @param {*} avatar
   */
  setAvatar(state, avatar) {
    state.avatar = avatar
  },
}
const actions = {
  /**
   * @description 登录
   * @param {*} { commit }
   * @param {*} userInfo
   */
  // async login({ commit }, userInfo) {
  //   const { data } = await login(userInfo)
  //   const accessToken = data[tokenName]
  //   if (accessToken) {
  //     commit('setAccessToken', accessToken)
  //   } else {
  //     message.error(`登录接口异常，未正确返回${tokenName}...`)
  //   }
  // },
  /**
   * @description 获取用户信息接口 这个接口非常非常重要，如果没有明确底层前逻辑禁止修改此方法，错误的修改可能造成整个框架无法正常使用
   * @param {*} { commit, dispatch, state }
   * @returns
   */
  // async getUserInfo({ commit, dispatch, state }) {
  //   const { data } = await getUserInfo(state.accessToken)
  //   if (!data) {
  //     message.error(`验证失败，请重新登录...`)
  //     return false
  //   }
  //   let { username, avatar, roles, ability } = data
  //   if (username && roles && Array.isArray(roles)) {
  //     dispatch('acl/setRole', roles, { root: true })
  //     if (ability && ability.length > 0)
  //       dispatch('acl/setAbility', ability, { root: true })
  //     commit('setUsername', username)
  //     commit('setAvatar', avatar)
  //   } else {
  //     message.error('用户信息接口异常')
  //   }
  // },
  /**
   * @description 退出登录
   * @param {*} { dispatch }
   */
  // async logout({ dispatch }) {
  //   await logout(state.accessToken)
  //   await dispatch('resetAll')
  // },
  /**
   * @description 重置accessToken、roles、ability、router等
   * @param {*} { commit, dispatch }
   */
  // async resetAll({ dispatch }) {
  //   await dispatch('setAccessToken', '')
  //   await dispatch('acl/setFull', false, { root: true })
  //   await dispatch('acl/setRole', [], { root: true })
  //   await dispatch('acl/setAbility', [], { root: true })
  // },
}
export default { state, getters, mutations, actions }
