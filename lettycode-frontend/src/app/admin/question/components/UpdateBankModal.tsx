import { Form, message, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  addQuestionBankQuestionUsingPost,
  listQuestionBankQuestionVoByPageUsingPost,
  removeQuestionBankQuestionUsingPost,
} from '@/api/questionBankQuestionController';
import { listQuestionBankVoByPageUsingPost } from '@/api/questionBankController';

interface Props {
  questionId?: number;
  visible: boolean;
  onCancel: () => void;
}

/**
 * 更新题目所属题库弹窗
 * @param props
 * @constructor
 */
const UpdateBankModal: React.FC<Props> = (props) => {
  const { questionId, visible, onCancel } = props;
  const [form] = Form.useForm();
  const [questionBankList, setQuestionBankList] = useState<
    API.QuestionBankVO[]
  >([]);

  // 获取所属题库列表
  const getCurrentQuestionBankIdList = async () => {
    try {
      const res = await listQuestionBankQuestionVoByPageUsingPost({
        questionId,
        pageSize: 20,
      });
      const list = (res.data?.records ?? []).map((item) => item.questionBankId);
      console.log(list);
      form.setFieldValue('questionBankIdList' as any, list);
    } catch (e) {
      message.error('failed to get list of questionbank ' + e.message);
    }
  };

  useEffect(() => {
    if (questionId) {
      getCurrentQuestionBankIdList();
    }
  }, [questionId]);

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
      message.error('failed to get list of questionbank ' + e.message);
    }
  };

  useEffect(() => {
    getQuestionBankList();
  }, []);

  return (
    <Modal
      destroyOnClose
      title={'update questionbank'}
      open={visible}
      footer={null}
      onCancel={() => {
        onCancel?.();
      }}
    >
      <Form form={form} style={{ marginTop: 24 }}>
        <Form.Item label='questionbank' name='questionBankIdList'>
          <Select
            mode='multiple'
            style={{ width: '100%' }}
            options={questionBankList.map((questionBank) => {
              return {
                label: questionBank.title,
                value: questionBank.id,
              };
            })}
            onSelect={async (value) => {
              const hide = message.loading('updating');
              try {
                await addQuestionBankQuestionUsingPost({
                  questionId,
                  questionBankId: value,
                });
                hide();
                message.success('done!');
              } catch (error: any) {
                hide();
                message.error('failed ' + error.message);
              }
            }}
            onDeselect={async (value) => {
              const hide = message.loading('updating');
              try {
                await removeQuestionBankQuestionUsingPost({
                  questionId,
                  questionBankId: value,
                });
                hide();
                message.success('done!');
              } catch (error: any) {
                hide();
                message.error('failed ' + error.message);
              }
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UpdateBankModal;
