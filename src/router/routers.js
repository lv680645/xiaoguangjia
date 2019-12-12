import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
	  path: '/join',
	  name: 'join',
	  component: Main,
	  meta: {
	    hideInMenu: true,
	    notCache: true
	  },
	  children: [
	    {
	      path: '/join',
	      name: 'join',
	      meta: {
	        hideInMenu: true,
	        title: '学员报名',
	        notCache: true,
	        icon: 'md-home'
	      },
	      component: () => import('@/view/join-page.vue')
	    }
	  ]
  },
	{
	  path: '/detail',
	  name: 'detail',
	  component: Main,
	  meta: {
	    hideInMenu: true,
	    notCache: true
	  },
	  children: [
	    {
	      path: '/detail',
	      name: 'detail',
	      meta: {
	        hideInMenu: true,
	        title: '学员详情',
	        notCache: true,
	        icon: 'md-home'
	      },
	      component: () => import('@/view/detail.vue')
	    }
	  ]
	},
  {
	  path: '/flow',
	  name: 'flow',
	  meta: {
	    icon: 'md-cloud-upload',
	    title: '学员管理'
	  },
	  component: Main,
	  children: [
	    {
	      path: 'flow_operation',
	      name: 'flow_operation',
	      meta: {
	        icon: 'ios-document',
	        title: '学员管理'
	      },
	      component: () => import('@/view/flow/operation.vue')
	    },
	    // {
	    //   path: 'flow_manage',
	    //   name: 'flow_manage',
	    //   meta: {
	    //     icon: 'md-clipboard',
	    //     title: '扫码待处理'
	    //   },
	    //   component: () => import('@/view/flow/manage.vue')
	    // },
	    {
			  path: 'flow_model',
			  name: 'flow_model',
			  meta: {
			    icon: 'md-clipboard',
			    title: '结转'
			  },
			  component: () => import('@/view/flow/model.vue')
	    },
	    {
			  path: 'flow_classify',
			  name: 'flow_classify',
			  meta: {
			    icon: 'md-clipboard',
			    title: '退费'
			  },
			  component: () => import('@/view/flow/classify.vue')
	    }
      // {
      //   path: 'flow_classify',
      //   name: 'flow_classify',
      //   meta: {
      //     icon: 'md-clipboard',
      //     title: '资金往来统计'
      //   },
      //   component: () => import('@/view/flow/classify.vue')
      // }
	  ]
  },
  {
	  path: '/administration',
	  name: 'administration',
	  component: Main,
	  meta: {
	    hideInBread: true
	  },
	  children: [
	    {
	      path: 'administration',
	      name: 'administration',
	      meta: {
	        icon: '_qq',
	        title: '课程管理'
	      },
	      component: () => import('@/view/administration/administration.vue')
	    }
	  ]
  },
  {
	  path: '/grade',
	  name: 'grade',
	  component: Main,
	  meta: {
	    hideInBread: true
	  },
	  children: [
	    {
	      path: 'grade',
	      name: 'grade',
	      meta: {
	        icon: '_qq',
	        title: '班级管理'
	      },
	      component: () => import('@/view/administration/grade.vue')
	    }
	  ]
  },
  {
	  path: '/teacher',
	  name: 'teacher',
	  component: Main,
	  meta: {
	    hideInBread: true
	  },
	  children: [
	    {
	      path: 'teacher',
	      name: 'teacher',
	      meta: {
	        icon: '_qq',
	        title: '老师管理'
	      },
	      component: () => import('@/view/administration/teacher.vue')
	    }
	  ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },

  // {
	 //  path: '/dataPage',
	 //  name: 'dataPage',
	 //  meta: {
	 //    icon: 'md-cloud-upload',
	 //    title: '数据管理'
	 //  },
	 //  component: Main,
	 //  children: [
	 //    {
	 //      path: 'dataPage_file',
	 //      name: 'dataPage_file',
	 //      meta: {
	 //        icon: 'ios-document',
	 //        title: '文件对象存储'
	 //      },
	 //      component: () => import('@/view/dataPage/file.vue')
	 //    },
	 //    {
	 //      path: 'dataPage_role',
	 //      name: 'dataPage_role',
	 //      meta: {
	 //        icon: 'md-clipboard',
	 //        title: '角色管理'
	 //      },
	 //      component: () => import('@/view/dataPage/role.vue')
	 //    },
  //     {
  // 	  path: 'dataPage_menu',
  // 	  name: 'dataPage_menu',
  // 	  meta: {
  // 	    icon: 'md-clipboard',
  // 	    title: '菜单管理'
  // 	  },
  // 	  component: () => import('@/view/dataPage/menu.vue')
  //     },
  //     {
  // 	  path: 'dataPage_dictionaries',
  // 	  name: 'dataPage_dictionaries',
  // 	  meta: {
  // 	    icon: 'md-clipboard',
  // 	    title: '数据字典管理'
  // 	  },
  // 	  component: () => import('@/view/dataPage/dictionaries.vue')
  //     },
  //     {
  // 	  path: 'dataPage_allocation',
  // 	  name: 'dataPage_allocation',
  // 	  meta: {
  // 	    icon: 'md-clipboard',
  // 	    title: '系统配置'
  // 	  },
  // 	  component: () => import('@/view/dataPage/allocation.vue')
  //     }
	 //  ]
  // },

  {
	  path: '/system',
	  name: 'system',
	  meta: {
	    icon: 'md-cloud-upload',
	    title: '系统管理'
	  },
	  component: Main,
	  children: [
	    {
	      path: 'system_timing',
	      name: 'system_timing',
	      meta: {
	        icon: 'ios-document',
	        title: '账号管理'
	      },
	      component: () => import('@/view/system/timing.vue')
	    },
	    {
	      path: 'system_journal',
	      name: 'system_journal',
	      meta: {
	        icon: 'md-clipboard',
	        title: '日志管理'
	      },
	      component: () => import('@/view/system/journal.vue')
	    }
	  ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
