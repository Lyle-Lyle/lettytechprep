'use client';
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';
import {
  deleteUserUsingPost,
  listUserByPageUsingPost,
} from '@/api/userController';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, message, Space, Typography } from 'antd';
import React, { useRef, useState } from 'react';

/**
 * 用户管理页面
 *
 * @constructor
 */
const UserAdminPage: React.FC = () => {
  // 是否显示新建窗口
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前用户点击的数据
  const [currentRow, setCurrentRow] = useState<API.User>();

  /**
   * 删除节点
   *
   * @param row
   */
  const handleDelete = async (row: API.User) => {
    const hide = message.loading('deleting');
    if (!row) return true;
    try {
      await deleteUserUsingPost({
        id: row.id as any,
      });
      hide();
      message.success('done!');
      actionRef?.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error('failed!' + error.message);
      return false;
    }
  };

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.User>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: 'userAccount',
      dataIndex: 'userAccount',
      valueType: 'text',
    },
    {
      title: 'userName',
      dataIndex: 'userName',
      valueType: 'text',
    },
    {
      title: 'userAvatar',
      dataIndex: 'userAvatar',
      valueType: 'image',
      fieldProps: {
        width: 64,
      },
      hideInSearch: true,
    },
    {
      title: 'Profile',
      dataIndex: 'userProfile',
      valueType: 'textarea',
    },
    {
      title: 'userRole',
      dataIndex: 'userRole',
      valueEnum: {
        user: {
          text: 'user',
        },
        admin: {
          text: 'admin',
        },
      },
    },
    {
      title: 'createTime',
      sorter: true,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: 'updateTime',
      sorter: true,
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: 'option',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Space size='middle'>
          <Typography.Link
            onClick={() => {
              setCurrentRow(record);
              setUpdateModalVisible(true);
            }}
          >
            edit
          </Typography.Link>
          <Typography.Link type='danger' onClick={() => handleDelete(record)}>
            delete
          </Typography.Link>
        </Space>
      ),
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.User>
        headerTitle={'search'}
        actionRef={actionRef}
        rowKey='key'
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type='primary'
            key='primary'
            onClick={() => {
              setCreateModalVisible(true);
            }}
          >
            <PlusOutlined /> create
          </Button>,
        ]}
        request={async (params, sort, filter) => {
          const sortField = Object.keys(sort)?.[0];
          const sortOrder = sort?.[sortField] ?? undefined;

          const { data, code } = await listUserByPageUsingPost({
            ...params,
            sortField,
            sortOrder,
            ...filter,
          } as API.UserQueryRequest);

          return {
            success: code === 0,
            data: data?.records || [],
            total: Number(data?.total) || 0,
          };
        }}
        columns={columns}
      />
      <CreateModal
        visible={createModalVisible}
        columns={columns}
        onSubmit={() => {
          setCreateModalVisible(false);
          actionRef.current?.reload();
        }}
        onCancel={() => {
          setCreateModalVisible(false);
        }}
      />
      <UpdateModal
        visible={updateModalVisible}
        columns={columns}
        oldData={currentRow}
        onSubmit={() => {
          setUpdateModalVisible(false);
          setCurrentRow(undefined);
          actionRef.current?.reload();
        }}
        onCancel={() => {
          setUpdateModalVisible(false);
        }}
      />
    </PageContainer>
  );
};
export default UserAdminPage;
