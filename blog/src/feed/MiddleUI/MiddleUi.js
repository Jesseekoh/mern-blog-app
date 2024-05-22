import Post from './Posts/Post';
import './styles/middleUi.css'

const MiddleUi = () => {
  return (
    <section className='middle-section'>
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
}
export default MiddleUi;
