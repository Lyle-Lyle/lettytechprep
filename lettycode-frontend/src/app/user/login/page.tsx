'use client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { userLoginUsingPost } from '@/api/userController';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/stores';
import { setLoginUser } from '@/stores/loginUser';
import { ProForm } from '@ant-design/pro-form/lib';
import { useRouter } from 'next/navigation';
import './index.css';

/**
 * 用户登录页面
 * @constructor
 */
const UserLoginPage: React.FC = () => {
  const [form] = ProForm.useForm();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  /**
   * 提交
   */
  const doSubmit = async (values: API.UserLoginRequest) => {
    try {
      const res = await userLoginUsingPost(values);
      if (res.data) {
        message.success('Successful!');
        // 保存用户登录状态
        dispatch(setLoginUser(res.data));
        router.replace('/');
        form.resetFields();
      }
    } catch (e) {
      message.error('error' + e.message);
    }
  };

  return (
    <div id='userLoginPage'>
      <LoginForm
        form={form}
        logo={
          <Image
            src='/assets/logo.png'
            alt='LyleTechPrep'
            height={44}
            width={44}
          />
        }
        title='LyleTechPrep - Sign in'
        subTitle='LyleTechPrep'
        onFinish={doSubmit}
      >
        <ProFormText
          name='userAccount'
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined />,
          }}
          placeholder={'Account'}
          rules={[
            {
              required: true,
              message: 'Enter your Account!',
            },
          ]}
        />
        <ProFormText.Password
          name='userPassword'
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          placeholder={'password'}
          rules={[
            {
              required: true,
              message: 'Enter your password',
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
            textAlign: 'end',
          }}
        >
          Create a new account
          <Link href={'/user/register'}>Sign up</Link>
        </div>
      </LoginForm>
    </div>
  );
};

export default UserLoginPage;
