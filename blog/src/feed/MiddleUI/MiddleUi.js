import Post from './Posts/Post';
import BlogPost from './blogPost/blogpost';
import './styles/middleUi.css'
import image1 from '../../assets/aliy.jpg';

const MiddleUi = () => {
  return (
    <section className='middle-section'>
      <Post
        commentsNo={2}
	likesNo={4}
	viewsNo={8}
	dislikesNo={1}
      />

      <BlogPost />
      <Post />
      <BlogPost
        time={9}
	image={image1}
	name='Joseph Aliy'
      />
    </section>
  );
}
export default MiddleUi;
