import { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Card, Typography } from 'antd';

import { useGetCoinsQuery } from '../services/features/coinsApi';

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 200;

  const { data: coinsList, error, isLoading } = useGetCoinsQuery(count);
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = coinsList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCoins(filteredData);
  }, [coinsList, searchTerm]);

  if (error) return 'Failed to fetch cryptocurrencies';

  if (isLoading) return 'Loading...';
  return (
    <>
      {!simplified && (
        <>
          <Typography.Title level={2} className="heading">
            Today's{' '}
            <span className="text-gradient">Cryptocurrency Prices </span>
            by MarketCap
          </Typography.Title>
          <div className="search-crypto">
            <Input
              placeholder="Search Cryptocurrencies"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins?.map((coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.uuid}>
            <Link to={`/crypto/${coin.uuid}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={coin.iconUrl}
                    alt={coin.name}
                  />
                }
                hoverable
              >
                <p>Symbol: {coin.symbol}</p>
                <p>Price: {millify(coin.price)}$</p>
                <p>Market Cap: {millify(coin.marketCap)}</p>
                <p
                  className={`${
                    coin.change < 0 ? 'negativeChange' : 'positiveChange'
                  }`}
                >
                  Daily Change: {millify(coin.change)}%
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
