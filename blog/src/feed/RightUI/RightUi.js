import TrendingPost from './trendingPost';
import MostViews from './mostViews';
import './styles/rightUi.css';

const RightUi = ({
  isLogin=false
}) => {
  if (isLogin) {
    return (
      <section className='right-ui'>

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
