const router = [
  {
    key: 'home',
    name: '首页',
    path: '/home',
    permissionKey: ''
  },
  {
    key: 'education',
    name: '教育',
    permissionKey: '',
    children: [
      {
        key: 'english',
        name: '英语',
        path: '/english',
        permissionKey: '',
      }
    ]
  },
  {
    key: 'non-education',
    name: '非教育',
    permissionKey: '',
    children: [
      {
        key: 'calligraphy',
        name: '书法',
        path: '/calligraphy',
        permissionKey: ''
      },
      {
        key: 'photography',
        name: '摄影',
        path: '/photography',
        permissionKey: ''
      }
    ]
  }
]

export default router