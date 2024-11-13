'use client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { userRegisterUsingPost } from '@/api/userController';
import { message } from 'antd';
import { ProForm } from '@ant-design/pro-form/lib';
import { useRouter } from 'next/navigation';
import './index.css';

/**
 * 用户注册页面
 * @constructor
 */
const UserRegisterPage: React.FC = () => {
  const [form] = ProForm.useForm();
  const router = useRouter();

  /**
   * 提交
   */
  const doSubmit = async (values: API.UserRegisterRequest) => {
    try {
      const res = await userRegisterUsingPost(values);
      if (res.data) {
        message.success('Successful! Please login');
        // 前往登录页
        router.replace('/user/login');
        form.resetFields();
      }
    } catch (e) {
      message.error('error' + e.message);
    }
  };

  return (
    <div id='userRegisterPage'>
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
        title='LyleTechPrep - Sign Up'
        subTitle='LyleTechPrep'
        submitter={{
          searchConfig: {
            submitText: 'Sign up',
          },
        }}
        onFinish={doSubmit}
      >
        <ProFormText
          name='userAccount'
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined />,
          }}
          placeholder={'account'}
          rules={[
            {
              required: true,
              message: 'Enter account',
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
              message: 'enter password',
            },
          ]}
        />
        <ProFormText.Password
          name='checkPassword'
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          placeholder={'checkPassword'}
          rules={[
            {
              required: true,
              message: 'confirm password',
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
            textAlign: 'end',
          }}
        >
          Already have an acount?
          <Link href={'/user/login'}>Sign in</Link>
        </div>
      </LoginForm>
    </div>
  );
};

export default UserRegisterPage;
