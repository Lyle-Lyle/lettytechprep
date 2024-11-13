import { Button, Result } from 'antd';

/**
 * 无权限访问的页面
 * @constructor
 */
const Forbidden = () => {
  return (
    // antd的result组件
    <Result
      status={403}
      title='403'
      subTitle='Sorry, no permission'
      extra={
        <Button type='primary' href='/'>
          Home
        </Button>
      }
    />
  );
};

export default Forbidden;
