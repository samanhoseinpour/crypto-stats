import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCoinsQuery } from '../services/features/coinsApi';
import { CryptoCurrencies, News } from '../components';

const { Title } = Typography;

const HomePage = () => {
  const { data, error, isLoading } = useGetCoinsQuery(10);

  const globalStats = data?.data.stats;

  if (error) return 'Failed to fetch coins data!';

  if (isLoading) return 'Loading...';

  return (
    <>
      <Title level={2} className="heading">
        Crypto <span className="text-gradient">data and insights</span> at your
        fingertips
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
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 <span className="text-gradient">Cryptocurrencies</span> in the
          World
        </Title>
        <Title level={3}>
          <Link to="/cryptocurrencies" className="show-more text-gradient">
            Show More
          </Link>
        </Title>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest <span className="text-gradient">Crypto</span> news
        </Title>
        <Title level={3}>
          <Link to="/news" className="show-more text-gradient">
            Show More
          </Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
