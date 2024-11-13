'use client';
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';
import {
  batchDeleteQuestionsUsingPost,
  deleteQuestionUsingPost,
  listQuestionByPageUsingPost,
} from '@/api/questionController';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, message, Popconfirm, Space, Table, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import TagList from '@/components/TagList';
import MdEditor from '@/components/MdEditor';
import UpdateBankModal from '@/app/admin/question/components/UpdateBankModal';
import BatchAddQuestionsToBankModal from '@/app/admin/question/components/BatchAddQuestionsToBankModal';
import BatchRemoveQuestionsFromBankModal from '@/app/admin/question/components/BatchRemoveQuestionsFromBankModal';
import './index.css';

/**
 * 题目管理页面
 *
 * @constructor
 */
const QuestionAdminPage: React.FC = () => {
  // 是否显示新建窗口
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  // 是否显示更新所属题库窗口
  const [updateBankModalVisible, setUpdateBankModalVisible] =
    useState<boolean>(false);
  // 是否显示批量向题库添加题目弹窗
  const [
    batchAddQuestionsToBankModalVisible,
    setBatchAddQuestionsToBankModalVisible,
  ] = useState<boolean>(false);
  // 是否显示批量从题库移除题目弹窗
  const [
    batchRemoveQuestionsFromBankModalVisible,
    setBatchRemoveQuestionsFromBankModalVisible,
  ] = useState<boolean>(false);
  // 当前选中的题目 id 列表
  const [selectedQuestionIdList, setSelectedQuestionIdList] = useState<
    number[]
  >([]);
  const actionRef = useRef<ActionType>();
  // 当前题目点击的数据
  const [currentRow, setCurrentRow] = useState<API.Question>();

  /**
   * 删除节点
   *
   * @param row
   */
  const handleDelete = async (row: API.Question) => {
    const hide = message.loading('deleting');
    if (!row) return true;
    try {
      await deleteQuestionUsingPost({
        id: row.id as any,
      });
      hide();
      message.success('done!');
      actionRef?.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error('failed' + error.message);
      return false;
    }
  };

  /**
   * 批量删除节点
   *
   * @param questionIdList
   */
  const handleBatchDelete = async (questionIdList: number[]) => {
    const hide = message.loading('deleting');
    try {
      await batchDeleteQuestionsUsingPost({
        questionIdList,
      });
      hide();
      message.success('done!');
    } catch (error: any) {
      hide();
      message.error('failed' + error.message);
    }
  };

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.Question>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: 'Quetionbank',
      dataIndex: 'questionBankId',
      hideInTable: true,
      hideInForm: true,
    },
    {
      title: 'title',
      dataIndex: 'title',
      valueType: 'text',
    },
    {
      title: 'content',
      dataIndex: 'content',
      valueType: 'text',
      hideInSearch: true,
      width: 240,
      renderFormItem: (item, { fieldProps }, form) => {
        // 编写要渲染的表单项
        // value 和 onchange 会通过 form 自动注入
        return <MdEditor {...fieldProps} />;
      },
    },
    {
      title: 'answer',
      dataIndex: 'answer',
      valueType: 'text',
      hideInSearch: true,
      width: 640,
      renderFormItem: (item, { fieldProps }, form) => {
        // 编写要渲染的表单项
        // value 和 onchange 会通过 form 自动注入
        return <MdEditor {...fieldProps} />;
      },
    },
    {
      title: 'tags',
      dataIndex: 'tags',
      valueType: 'select',
      fieldProps: {
        mode: 'tags',
      },
      render: (_, record) => {
        const tagList = JSON.parse(record.tags || '[]');
        return <TagList tagList={tagList} />;
      },
    },
    {
      title: 'createdBy',
      dataIndex: 'userId',
      valueType: 'text',
      hideInForm: true,
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
      title: 'editTime',
      sorter: true,
      dataIndex: 'editTime',
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
      title: 'operation',
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
          <Typography.Link
            onClick={() => {
              setCurrentRow(record);
              setUpdateBankModalVisible(true);
            }}
          >
            edit questionbank
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
      <ProTable<API.Question>
        headerTitle={'Table'}
        actionRef={actionRef}
        scroll={{
          x: true,
        }}
        search={{
          labelWidth: 120,
        }}
        rowKey='id'
        rowSelection={{
          // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
          // 注释该行则默认不显示下拉选项
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
          defaultSelectedRowKeys: [1],
        }}
        tableAlertRender={({
          selectedRowKeys,
          selectedRows,
          onCleanSelected,
        }) => {
          console.log(selectedRowKeys, selectedRows);
          return (
            <Space size={24}>
              <span>
                selected {selectedRowKeys.length}
                <a style={{ marginInlineStart: 8 }} onClick={onCleanSelected}>
                  cancel
                </a>
              </span>
            </Space>
          );
        }}
        tableAlertOptionRender={({
          selectedRowKeys,
          selectedRows,
          onCleanSelected,
        }) => {
          return (
            <Space size={16}>
              <Button
                onClick={() => {
                  // 打开弹窗
                  setSelectedQuestionIdList(selectedRowKeys as number[]);
                  setBatchAddQuestionsToBankModalVisible(true);
                }}
              >
                batch add questions
              </Button>
              <Button
                onClick={() => {
                  // 打开弹窗
                  setSelectedQuestionIdList(selectedRowKeys as number[]);
                  setBatchRemoveQuestionsFromBankModalVisible(true);
                }}
              >
                batch delete questions
              </Button>
              <Popconfirm
                title='delete'
                description='are you sure you want to delete the question?'
                onConfirm={() => {
                  // 批量删除
                  handleBatchDelete(selectedRowKeys as number[]);
                }}
                okText='Yes'
                cancelText='No'
              >
                <Button
                  danger
                  onClick={() => {
                    // 打开弹窗
                  }}
                >
                  batch delete questions
                </Button>
              </Popconfirm>
            </Space>
          );
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

          const { data, code } = await listQuestionByPageUsingPost({
            ...params,
            sortField,
            sortOrder,
            ...filter,
          } as API.QuestionQueryRequest);

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
      <UpdateBankModal
        visible={updateBankModalVisible}
        questionId={currentRow?.id}
        onCancel={() => {
          setUpdateBankModalVisible(false);
        }}
      />
      <BatchAddQuestionsToBankModal
        visible={batchAddQuestionsToBankModalVisible}
        questionIdList={selectedQuestionIdList}
        onSubmit={() => {
          setBatchAddQuestionsToBankModalVisible(false);
        }}
        onCancel={() => {
          setBatchAddQuestionsToBankModalVisible(false);
        }}
      />
      <BatchRemoveQuestionsFromBankModal
        visible={batchRemoveQuestionsFromBankModalVisible}
        questionIdList={selectedQuestionIdList}
        onSubmit={() => {
          setBatchRemoveQuestionsFromBankModalVisible(false);
        }}
        onCancel={() => {
          setBatchRemoveQuestionsFromBankModalVisible(false);
        }}
      />
    </PageContainer>
  );
};
export default QuestionAdminPage;
