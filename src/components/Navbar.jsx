import { useState } from 'react';
import { Typography, Button, Layout, Avatar, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  MoneyCollectOutlined,
  BulbOutlined,
  HomeOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import icon from '../images/btc.webp';

const getItem = (label, key, icon) => {
  return {
    label,
    key,
    icon,
  };
};

const items = [
  getItem(<Link to="/">Home</Link>, 'home', <HomeOutlined />),
  getItem(
    <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    'cryptocurrencies',
    <MoneyCollectOutlined />
  ),
  getItem(
    <Link to="/exchanges">Exchanges</Link>,
    'exchanges',
    <FundOutlined />
  ),
  getItem(<Link to="/news">News</Link>, 'news', <BulbOutlined />),
];

const Navbar = () => {
  const [current, setCurrent] = useState('home');

  const onActive = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto Stats</Link>
        </Typography.Title>
      </div>
      <Menu
        theme="dark"
        items={items}
        selectedKeys={[current]}
        onClick={onActive}
      />
    </div>
  );
};

export default Navbar;
