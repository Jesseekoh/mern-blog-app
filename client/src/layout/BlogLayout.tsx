import { Outlet, Link } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const BlogLayout = () => {
  return (
    <>
      <Nav />
      <main className="mx-auto">
        <Outlet />
      </main>
      <aside className="side-content">
        {/* This will contain trending blog post */}
      </aside>
      <footer>
        <p className="text-center">
          Made with 💓 by{' '}
          <Link to={'https://github.com/jesseekoh'}>Jesseekoh</Link> and{' '}
          <Link to={'https://github.com/jesseekoh'}>EdwardOdey</Link>
        </p>
      </footer>
    </>
  );
};

export default BlogLayout;
