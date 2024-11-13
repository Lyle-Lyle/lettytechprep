import { MenuDataItem } from '@ant-design/pro-layout';
import { CrownOutlined } from '@ant-design/icons';
import ACCESS_ENUM from '@/access/accessEnum';

// 菜单列表
export const menus = [
  {
    path: '/',
    name: 'Explore',
  },
  {
    path: '/banks',
    name: 'Topics',
  },
  {
    path: '/questions',
    name: 'Questions',
  },
  {
    name: 'lettytechprep',
    path: 'https://github.com/Lyle-Lyle/lettytechprep',
    target: '_blank',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: <CrownOutlined />,
    access: ACCESS_ENUM.ADMIN,
    children: [
      {
        path: '/admin/user',
        name: 'user admin',
        access: ACCESS_ENUM.ADMIN,
      },
      {
        path: '/admin/bank',
        name: 'question banks admin',
        access: ACCESS_ENUM.ADMIN,
      },
      {
        path: '/admin/question',
        name: 'questions admin',
        access: ACCESS_ENUM.ADMIN,
      },
    ],
  },
] as MenuDataItem[];

// 根据全部路径查找菜单
export const findAllMenuItemByPath = (path: string): MenuDataItem | null => {
  return findMenuItemByPath(menus, path);
};

// 根据路径查找菜单（递归）
export const findMenuItemByPath = (
  menus: MenuDataItem[],
  path: string
): MenuDataItem | null => {
  for (const menu of menus) {
    // 直接找到菜单
    if (menu.path === path) {
      return menu;
    }
    // 如果有children
    if (menu.children) {
      // children又是一个数组所以再调用
      const matchedMenuItem = findMenuItemByPath(menu.children, path);
      if (matchedMenuItem) {
        return matchedMenuItem;
      }
    }
  }
  return null;
};
