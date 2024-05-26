import { Outlet, Link } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
const ProfileLayout = () => (
  <>
    <Nav />
    <main className="mx-auto">
      <Outlet />
    </main>
    <footer>
      <p className="text-center">
        Made with 💓 by{' '}
        <Link to={'https://github.com/jesseekoh'}>Jesseekoh</Link> and{' '}
        <Link to={'https://github.com/jesseekoh'}>EdwardOdey</Link>
      </p>
    </footer>
  </>
);

export default ProfileLayout;
