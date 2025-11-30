import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const refreshPage = () => {
  window.location.reload();
};

const Banned = ({ status, title, subTitle }) => (
  <Result
    className="h-full"
    status={status}
    title={title}
    subTitle={subTitle}
    extra={[
      <Link to="/">
        <Button type="primary" onClick={() => refreshPage()}>
          Reload
        </Button>
      </Link>,
    ]}
  ></Result>
);
export default Banned;
