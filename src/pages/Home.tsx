import { Layout } from '@/components/common/Layout';
import Header from '@/components/common/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <Header />
      <div>
        <Link to="/starter-pack">스타터팩 목록으로 가기</Link>
      </div>
    </Layout>
  );
};

export default Home;
