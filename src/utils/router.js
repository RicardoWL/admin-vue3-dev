import store from '@/store'
import path from 'path'
import { isExternal } from './index'

/**
 * 判断是否与当前角色权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles) {
  if (store.getters['acl/admin']) {
    return true
  } else if (roles) {
    return store.getters['acl/role'].indexOf(roles) > -1
  } else {
    return true
  }
}

/**
 * @description 根据roles数组拦截路由
 * @param routes
 * @param baseUrl
 * @returns {[]}
 */
export function filterRoutes(routes, baseUrl = '/') {
  return routes
    .filter((route) => {
      if (route.meta && route.meta.roles) return hasPermission(route.meta.roles)
      else return true
    })
    .map((route) => {
      if (route.path !== '*' && !isExternal(route.path))
        route.path = path.resolve(baseUrl, route.path)
      route.fullPath = route.path
      if (route.children)
        route.children = filterRoutes(route.children, route.fullPath)
      return route
    })
}
