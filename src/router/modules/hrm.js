import Layout from '@/layout'

const hrmRouters = {
  path: '/hrm',
  component: Layout,
  name: 'hrm',
  meta: {
    title: '人资管理',
    icon: 'apps-line',
  },
  redirect: '/hrm/manage_indicator',
  alwaysShow: true,
  children: [
    {
      path: 'manage_indicator',
      name: 'manage_indicator',
      component: () => import('@/views/hrm/manageIndicator/index'),
      meta: {
        title: '指标管理',
        icon: 'bar-chart-2-line',
      },
    },
    {
      path: 'manage_evaluation',
      name: 'manage_evaluation',
      component: () => import('@/views/hrm/manageEvaluation/index'),
      meta: {
        title: '人才评分配置',
        icon: 'star-smile-line',
      },
    },
  ],
}

export default hrmRouters
