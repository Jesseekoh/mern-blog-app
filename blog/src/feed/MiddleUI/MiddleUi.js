import Post from './Posts/Post';
import './styles/middleUi.css'

const MiddleUi = () => {
  return (
    <section className='middle-section'>
      <Post
        commentsNo={2}
	likesNo={4}
	viewsNo={8}
	dislikesNo={1}
      />

      <Post />
      <Post />
      <Post />
    </section>
  );
}
export default MiddleUi;
