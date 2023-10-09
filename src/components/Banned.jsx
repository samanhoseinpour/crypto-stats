import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Banned = () => (
  <Result
    className="h-full"
    status="error"
    title="Our website doesn't available in your country."
    subTitle="Please check and modify your IP address."
    extra={[
      <Link to="/">
        <Button type="primary">Reload</Button>
      </Link>,
    ]}
  ></Result>
);
export default Banned;
