import { useGetNewsQuery } from '../services/features/newsApi';

const News = ({ simplified }) => {
  const {
    data: coinNews,
    error,
    isLoading,
  } = useGetNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 10 : 100,
  });

  console.log(coinNews);

  return <div>News</div>;
};

export default News;
