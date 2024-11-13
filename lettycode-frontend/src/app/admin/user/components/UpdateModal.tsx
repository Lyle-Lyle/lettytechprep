import { updateUserUsingPost } from '@/api/userController';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { message, Modal } from 'antd';
import React from 'react';

interface Props {
  oldData?: API.User;
  visible: boolean;
  columns: ProColumns<API.User>[];
  onSubmit: (values: API.UserAddRequest) => void;
  onCancel: () => void;
}

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.UserUpdateRequest) => {
  const hide = message.loading('updating');
  try {
    await updateUserUsingPost(fields);
    hide();
    message.success('done!');
    return true;
  } catch (error: any) {
    hide();
    message.error('failed' + error.message);
    return false;
  }
};

/**
 * 更新弹窗
 * @param props
 * @constructor
 */
const UpdateModal: React.FC<Props> = (props) => {
  const { oldData, visible, columns, onSubmit, onCancel } = props;

  if (!oldData) {
    return <></>;
  }

  return (
    <Modal
      destroyOnClose
      title={'update'}
      open={visible}
      footer={null}
      onCancel={() => {
        onCancel?.();
      }}
    >
      <ProTable
        type='form'
        columns={columns}
        form={{
          initialValues: oldData,
        }}
        onSubmit={async (values: API.UserAddRequest) => {
          const success = await handleUpdate({
            ...values,
            id: oldData?.id as any,
          } as any);
          if (success) {
            onSubmit?.(values);
          }
        }}
      />
    </Modal>
  );
};
export default UpdateModal;
