import { menus } from '../../config/menu';
import checkAccess from '@/access/checkAccess';

/**
 * 获取有权限、可访问的菜单（递归）
 * @param loginUser
 * @param menuItems
 */
const getAccessibleMenus = (loginUser: API.LoginUserVO, menuItems = menus) => {
  return menuItems.filter((item) => {
    if (!checkAccess(loginUser, item.access)) {
      return false;
    }
    // 如果有孩子获取孩子的菜单
    if (item.children) {
      item.children = getAccessibleMenus(loginUser, item.children);
    }
    return true;
  });
};

export default getAccessibleMenus;
