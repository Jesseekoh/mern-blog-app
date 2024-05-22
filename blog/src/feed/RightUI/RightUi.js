import TrendingPost from './trendingPost';
import MostViews from './mostViews';
import './styles/rightUi.css';

const RightUi = () => {
  return (
    <section className='right-ui'>
      <TrendingPost />
      <MostViews />
    </section>
  );
}

export default RightUi;
