import './Nav.css';
import { BiSolidBookAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <header className="header fixed w-full top-0">
      <nav>
        <div className="nav__container flex justify-between w-full px-3 py-3">
          <Link to={'/'} className="nav__logo flex items-center text-3xl">
            <BiSolidBookAlt />
            Blog
          </Link>

          <ul className="nav__links flex justify-between items-center">
            <li>
              <Link to={'/blogs'}>Blogs</Link>
            </li>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
            <li>
              <Link to={'/signup'}>Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
