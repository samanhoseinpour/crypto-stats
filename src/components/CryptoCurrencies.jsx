import { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Card } from 'antd';

import { useGetCoinsQuery } from '../services/features/coinsApi';

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: coinsList, error, isLoading } = useGetCoinsQuery(count);
  const [coins, setCoins] = useState(coinsList?.data?.coins);

  console.log(coins);

  if (isLoading) return 'Loading...';

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins?.map((coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.uuid}>
            <Link to={`/crypto/${coin.id}`}>
              <Card
                title={`${coin.rank}. ${coin.symbol}`}
                extra={
                  <img
                    className="crypto-image"
                    src={coin.iconUrl}
                    alt={coin.name}
                  />
                }
                hoverable
              >
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
