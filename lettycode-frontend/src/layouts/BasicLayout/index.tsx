'use client';
import { GithubFilled, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { Dropdown, message } from 'antd';
import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import GlobalFooter from '@/components/GlobalFooter';
import { menus } from '../../../config/menu';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/stores';
import getAccessibleMenus from '@/access/menuAccess';
import { userLogoutUsingPost } from '@/api/userController';
import { setLoginUser } from '@/stores/loginUser';
import { DEFAULT_USER } from '@/constants/user';
import SearchInput from '@/layouts/BasicLayout/components/SearchInput';
import './index.css';

interface Props {
  children: React.ReactNode;
}

/**
 * 全局通用布局
 * @param children
 * @constructor
 */
export default function BasicLayout({ children }: Props) {
  const pathname = usePathname();
  // 当前登录用户
  const loginUser = useSelector((state: RootState) => state.loginUser);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  /**
   * 用户注销
   */
  const userLogout = async () => {
    try {
      await userLogoutUsingPost();
      message.success('Signed out');
      // 把全局状态设置为
      dispatch(setLoginUser(DEFAULT_USER));
      router.push('/user/login');
    } catch (e) {
      message.error('error' + e.message);
    }
  };

  return (
    <div
      id='basicLayout'
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProLayout
        title='LyleTechPrep'
        layout='top'
        logo={
          <Image
            src='/assets/logo.png'
            height={32}
            width={32}
            alt='lyleTechPrep'
          />
        }
        location={{
          pathname,
        }}
        avatarProps={{
          src: loginUser.userAvatar || '/assets/logo.png',
          size: 'small',
          title: loginUser.userName || 'Lyle',
          render: (props, dom) => {
            if (!loginUser.id) {
              return (
                <div
                  onClick={() => {
                    router.push('/user/login');
                  }}
                >
                  {/* 这个dom属性 */}
                  {dom}
                </div>
              );
            }
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'userCenter',
                      icon: <UserOutlined />,
                      label: 'Profile',
                    },
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: 'Logout',
                    },
                  ],
                  onClick: async (event: { key: React.Key }) => {
                    const { key } = event;
                    if (key === 'logout') {
                      userLogout();
                    } else if (key === 'userCenter') {
                      router.push('/user/center');
                    }
                  },
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        // 右上角操作区
        actionsRender={(props) => {
          // 屏幕尺寸小就不会显示右上角操作区了
          if (props.isMobile) return [];
          return [
            // React中返回数组每个元素都要一个key
            <SearchInput key='search' />,
            <a
              key='github'
              href='https://github.com/Lyle-Lyle/lettytechprep'
              target='_blank'
            >
              <GithubFilled key='GithubFilled' />
            </a>,
          ];
        }}
        headerTitleRender={(logo, title, _) => {
          return (
            <a>
              {logo}
              {title}
            </a>
          );
        }}
        // 渲染底部栏
        footerRender={() => {
          return <GlobalFooter />;
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        // 定义有哪些菜单
        menuDataRender={() => {
          // 获得可以显示的菜单（有权限访问的菜单，根据当前登录的用户）
          return getAccessibleMenus(loginUser, menus);
        }}
        // 定义了菜单项如何渲染
        menuItemRender={(item, dom) => (
          // 这里用Link组件代替了普通的文本，导航栏文字就是链接了
          // Next.js提供的Link组件 优化了不必要的跳转
          <Link href={item.path || '/'} target={item.target}>
            {dom}
          </Link>
        )}
      >
        {/* 不同的页面展示不同的内容 */}
        {children}
      </ProLayout>
    </div>
  );
}
