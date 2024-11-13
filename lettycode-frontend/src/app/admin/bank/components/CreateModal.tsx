import { addQuestionBankUsingPost } from '@/api/questionBankController';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { message, Modal } from 'antd';
import React from 'react';

interface Props {
  visible: boolean;
  columns: ProColumns<API.QuestionBank>[];
  onSubmit: (values: API.QuestionBankAddRequest) => void;
  onCancel: () => void;
}

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.QuestionBankAddRequest) => {
  const hide = message.loading('adding');
  try {
    await addQuestionBankUsingPost(fields);
    hide();
    message.success('done!');
    return true;
  } catch (error: any) {
    hide();
    message.error('failed ' + error.message);
    return false;
  }
};

/**
 * 创建弹窗
 * @param props
 * @constructor
 */
const CreateModal: React.FC<Props> = (props) => {
  const { visible, columns, onSubmit, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title={'create'}
      open={visible}
      footer={null}
      onCancel={() => {
        onCancel?.();
      }}
    >
      <ProTable
        type='form'
        columns={columns}
        onSubmit={async (values: API.QuestionBankAddRequest) => {
          const success = await handleAdd(values);
          if (success) {
            onSubmit?.(values);
          }
        }}
      />
    </Modal>
  );
};
export default CreateModal;
