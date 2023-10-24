import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@background/sys',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon: 'HomeOutlined',
    },
    {
      name: '管理员',
      path: '/admin',
      routes: [
        {
          name: '管理员列表',
          path: 'adminlist',
          component: './Admin/adminList'
        },
        {
          name: '添加管理员',
          path: 'addadmin',
          component: './Admin/addAdmin'
        },
      ],
      icon: 'UserOutlined',
    },
    {
      name: '用户',
      path: '/user',
      routes: [
        {
          name: '用户列表',
          path: 'userlist',
          component: './User/userList'
        },
        {
          name: '添加用户',
          path: 'adduser',
          component: './User/addUser'
        },
      ],
      icon: 'TeamOutlined',
    },
    {
      name: '书籍',
      path: '/book',
      routes: [
        {
          name: '书籍列表',
          path: 'booklist',
          component: './Book/bookList'
        },
        {
          name: '添加书籍',
          path: 'addbook',
          component: './Book/addBook'
        },
      ],
      icon: 'ReadOutlined',
    },
    {
      name: '面试题',
      path: '/interview',
      component: './Interview',
      icon: 'EditOutlined',
    },
    {
      name: '问答',
      path: '/issue',
      component: './Issue',
      icon: 'ProfileOutlined',
    },
    {
      name: '评论',
      path: '/comment',
      component: './Comment',
      icon: 'CalendarOutlined',
    },
    {
      name: '类型',
      path: '/type',
      component: './Type',
      icon: 'AppstoreOutlined',
    },
    {
      name: '作业',
      path: '/homework',
      routes: [
        {
          name: 'React培训',
          path: 'reprac',
          component: './Homework/RePrac'
        },
      ],
      icon: 'FileOutlined',
    },
  ],
  npmClient: 'pnpm',
});

