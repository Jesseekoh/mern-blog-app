import TrendingPost from './trendingPost';
import MostViews from './mostViews';
import './styles/rightUi.css';

const RightUi = () => {
  return (
    <section className='right-ui'>
      <h3>Trending Post</h3>
      <TrendingPost />
      <h3>Most Views</h3>
      <MostViews />
    </section>
  );
}

export default RightUi;
