import TrendingPost from './trendingPost';
import MostViews from './mostViews';
import './styles/rightUi.css';

const RightUi = ({
  isLogin=false
}) => {
  if (isLogin) {
    return (
      <section className='right-ui'>
        <h3>Trending Post</h3>
        <TrendingPost
	  isLogin={isLogin}
	/>
        <h3>Most Views</h3>
        <MostViews
	  isLogin={isLogin}
	/>
      </section>
    );
  } else {
    return (
      <section className='right-ui'>
        <TrendingPost />
        <MostViews />
      </section>
    );
  }
}

export default RightUi;
