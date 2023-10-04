import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCoinsQuery } from '../services/features/coinsApi';
const { Title } = Typography;

const HomePage = () => {
  const { data, error, isLoading } = useGetCoinsQuery();

  const globalStats = data?.data?.stats;

  if (isLoading) return 'Loading...';

  return (
    <>
      <Title level={2} className="heading">
        Crypto data and insights at your fingertips
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={data && millify(globalStats.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={data && millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Marketcap"
            value={data && millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={data && millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={data && millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
