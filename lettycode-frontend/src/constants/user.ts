import ACCESS_ENUM from '@/access/accessEnum';

// 默认用户
export const DEFAULT_USER: API.LoginUserVO = {
  userName: 'NOT_LOGIN',
  userProfile: 'NOT_LOGIN',
  userAvatar: '/assets/notLoginUser.png',
  userRole: ACCESS_ENUM.NOT_LOGIN,
};
