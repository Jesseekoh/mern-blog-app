import { useEffect, useState } from 'react';
import './Nav.css';
import { BiSolidBookAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IoCreateOutline } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';
const Nav = () => {
  // const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const validateTokenFromCookie = async () => {
      const response = await fetch(
        'http://localhost:8000/verify-user-with-cookie',
        {
          credentials: 'include',
        }
      );
      const data = await response.json();

      const userInfo = data.data;
      if (userInfo) {
        setUsername(userInfo.username);
        setUserId(userInfo.id);
      } else {
        setUsername('');
        setUserId('');
      }
    };
    validateTokenFromCookie();
  }, []);

  return (
    <header className="header fixed w-full top-0">
      <nav>
        <div className="nav__container flex justify-between w-full px-3 py-3">
          <Link
            to={'/'}
            reloadDocument
            className="nav__logo flex items-center text-3xl"
          >
            <BiSolidBookAlt />
            Blog
          </Link>

          <ul className="nav__links flex justify-between items-center">
            {username ? (
              <>
                <li>
                  <Link
                    to={`/profile/${userId}`}
                    className="flex gap-1 items-center"
                  >
                    <img
                      src={`https://www.robohash.org/${userId}?set=set4&size=100x100`}
                      className="w-10 rounded-full"
                      alt="User's profile image"
                    />
                    <p className="hidden md:block">{username}</p>
                  </Link>
                </li>

                <li className="border-indigo-500 border-2 bg-indigo-500 text-white px-2 py-1 rounded-lg ">
                  <Link
                    to={'/create'}
                    className="flex md:hidden gap-1 items-center"
                  >
                    <span>Create</span>
                    <IoCreateOutline size={20} className="font-bold" />
                  </Link>
                  <Link
                    to={'/create-post'}
                    className="hidden md:flex gap-1 items-center"
                  >
                    <span>Create Post</span>
                    <IoCreateOutline size={20} className="font-bold" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/logout'}
                    reloadDocument
                    className="bg-black flex text-white px-2 py-2 rounded-md gap-1 items-center"
                    // onClick={handleLogout}
                  >
                    <IoMdExit size={20} />
                    <p className="hidden md:block text-white">Logout</p>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <Link to={'/login'}>Log in</Link>
                <Link to={'/signup'}>Sign up</Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
