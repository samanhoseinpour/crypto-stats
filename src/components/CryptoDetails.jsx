import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography, Select } from 'antd';
import millify from 'millify';
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

import { useGetCoinDetailsQuery } from '../services/features/coinsApi';
const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, error, isLoading } = useGetCoinDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  console.log(cryptoDetails);

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: '24h Volume',
      value: `$ ${
        cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Market Cap',
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'FDV',
      value: `$ ${
        cryptoDetails?.fullyDilutedMarketCap &&
        millify(cryptoDetails?.fullyDilutedMarketCap)
      }`,
      icon: <InfoCircleOutlined />,
    },
    {
      title: 'All-time-high',
      value: `$ ${millify(cryptoDetails?.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails?.supply.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Total Supply',
      value: `$ ${millify(cryptoDetails?.supply.total)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${millify(cryptoDetails?.supply.circulating)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <>
      <Col className="coin-detail-container">
        <Col className="coin-heading-container">
          <img
            src={cryptoDetails?.iconUrl}
            alt={cryptoDetails?.name}
            className="crypto-image"
            width={50}
            height={50}
          />
          <Title level={2} className="coin-name">
            {cryptoDetails?.name} ({cryptoDetails?.symbol})
          </Title>
          <p>
            {cryptoDetails?.name} live price in US dollars. View value
            statistics, marketcap and supply.
          </p>
        </Col>
        <Select
          defaultValue={timePeriod}
          className="select-timeperiod"
          placeholder="Select time period"
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((date) => (
            <Option key={date}>{date}</Option>
          ))}
        </Select>
        {/* Line chart */}
        <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                {cryptoDetails?.name} Value statistics
              </Title>
              <p>
                An overview showing stats of {cryptoDetails?.name}, such as the
                base and quote currency, the rank, and trading volume.
              </p>
            </Col>
            {stats.map(({ icon, title, value }) => (
              <Col className="coin-stats" key={title}>
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                Other statistics
              </Title>
              <p>An overview showing stats of all cryptocurrencies</p>
            </Col>
            {genericStats.map(({ icon, title, value }) => (
              <Col className="coin-stats" key={title}>
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
        <Col className="coin-desc-link">
          <Row className="coin-desc">
            <Title level={3} className="coin-details-heading">
              What is {cryptoDetails?.name} ?{' '}
              <p className="coin-detail">{cryptoDetails?.description}</p>
            </Title>
          </Row>
          <Col className="coin-links">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails?.name} Links
            </Title>
            {cryptoDetails?.links.map((link) => (
              <Row className="coin-link" key={link.name}>
                <Title className="link-name" level={5}>
                  {link.type}
                </Title>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </Row>
            ))}
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default CryptoDetails;
