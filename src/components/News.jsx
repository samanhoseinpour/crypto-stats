import { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetNewsQuery } from '../services/features/newsApi';
import { useGetCoinsQuery } from '../services/features/coinsApi';
import Loader from './Loader';

const { Title, Text } = Typography;
const { Option } = Select;
const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  const {
    data: coinNews,
    error,
    isLoading,
  } = useGetNewsQuery({
    newsCategory,
    count: simplified ? 6 : 100,
  });

  const { data } = useGetCoinsQuery(200);

  if (error) return 'Failed to fetch news';

  if (isLoading) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <>
          <Typography.Title level={2} className="heading">
            <span className="text-gradient">Cryptocurrency Latest News</span> by
            24h Change
          </Typography.Title>
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Search a Coin"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) > 0
              }
            >
              {data?.data.coins.map((coin) => (
                <Option key={coin.uuid} value={coin.name}></Option>
              ))}
            </Select>
          </Col>
        </>
      )}
      {coinNews?.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card className="news-card" hoverable>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: '200px', maxHeight: '100px' }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt={news}
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  ></Avatar>
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
