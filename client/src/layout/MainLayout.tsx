import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
const MainLayout = () => (
  <>
    <Nav />
    <main className="mx-auto">
      <Outlet />
    </main>
  </>
);

export default MainLayout;
