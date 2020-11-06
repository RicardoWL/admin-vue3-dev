import { asyncRouterMap, constantRouterMap } from '@/router'
import { filterRoutes } from '@/utils/router'
// import layout from '@/layout'

// 获取首页
// function getHomeIndex(router, path = '') {
//   if (router[0].children && router[0].children.length) {
//     return getHomeIndex(router[0].children, path + router[0].path + '/')
//   }
//   return {
//     path: '/',
//     redirect: path + router[0].path,
//     component: layout,
//     hidden: true,
//   }
// }

const state = {
  routers: constantRouterMap,
  addRouters: [],
}

const getters = {
  routers: (state) => state.routers,
  addRouters: (state) => state.addRouters,
}

const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers
    state.routers = constantRouterMap.concat(routers)
  },
}

const actions = {
  async GenerateRoutes({ commit }) {
    const finallyRoutes = filterRoutes([
      ...constantRouterMap,
      ...asyncRouterMap,
    ])
    commit('SET_ROUTERS', finallyRoutes)
    return [...asyncRouterMap]
  },
}

export default { state, mutations, getters, actions }
