import { Button, Form, message, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { listQuestionBankVoByPageUsingPost } from '@/api/questionBankController';
import { batchAddQuestionsToBankUsingPost } from '@/api/questionBankQuestionController';

interface Props {
  questionIdList?: number[];
  visible: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

/**
 * 批量向题库添加题目弹窗
 * @param props
 * @constructor
 */
const BatchAddQuestionsToBankModal: React.FC<Props> = (props) => {
  const { questionIdList = [], visible, onCancel, onSubmit } = props;
  const [form] = Form.useForm();
  const [questionBankList, setQuestionBankList] = useState<
    API.QuestionBankVO[]
  >([]);

  /**
   * 提交
   *
   * @param values
   */
  const doSubmit = async (values: API.QuestionBankQuestionBatchAddRequest) => {
    const hide = message.loading('ing...');
    const questionBankId = values.questionBankId;
    if (!questionBankId) {
      return;
    }
    try {
      await batchAddQuestionsToBankUsingPost({
        questionBankId,
        questionIdList,
      });
      hide();
      message.success('done!');
      onSubmit?.();
    } catch (error: any) {
      hide();
      message.error('failed ' + error.message);
    }
  };

  // 获取题库列表
  const getQuestionBankList = async () => {
    // 题库数量不多，直接全量获取
    const pageSize = 200;

    try {
      const res = await listQuestionBankVoByPageUsingPost({
        pageSize,
        sortField: 'createTime',
        sortOrder: 'descend',
      });
      setQuestionBankList(res.data?.records ?? []);
    } catch (e) {
      message.error('failed ' + e.message);
    }
  };

  useEffect(() => {
    getQuestionBankList();
  }, []);

  return (
    <Modal
      destroyOnClose
      title={'batch add questions'}
      open={visible}
      footer={null}
      onCancel={() => {
        onCancel?.();
      }}
    >
      <Form form={form} style={{ marginTop: 24 }} onFinish={doSubmit}>
        <Form.Item label='select questionBank' name='questionBankId'>
          <Select
            style={{ width: '100%' }}
            options={questionBankList.map((questionBank) => {
              return {
                label: questionBank.title,
                value: questionBank.id,
              };
            })}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default BatchAddQuestionsToBankModal;
