import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  json,
  redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainLayout from './layout/MainLayout';
import Blogs from './pages/Blogs';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';

import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './pages/CreatePost';
import { UserContextProvider } from './contexts/UserContext';
import Profile from './pages/Profile';
import ProfileLayout from './layout/ProfileLayout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import BlogLayout from './layout/BlogLayout';

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/logout',
    element: <Logout />,
    loader: async () => {
      try {
        const response = await fetch('http://localhost:8000/logout', {
          credentials: 'include',
        });

        const data = await response.json();
        if (data) {
          return redirect('/');
        }
        return null;
      } catch (err) {
        console.log(err);
      }
    },
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        // path: '/',
        index: true,
        element: <Blogs />,
      },
      {
        path: '/create-post',
        loader: async () => {
          try {
            const response = await fetch(
              'http://localhost:8000/verify-user-with-cookie',
              {
                credentials: 'include',
              }
            );

            if (response.ok) {
              const data = await response.json();
              const userInfo = data.data;
              if (userInfo) {
                // setUserDetails(userInfo);
                return userInfo;
              }
            }
            return redirect('/login');
          } catch (err) {
            console.log(err);
            return redirect('/login');
          }
        },
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/blogs/:blogId',
    element: <BlogLayout />,
    children: [
      {
        index: true,
        element: <BlogPage />,
        loader: async ({ params }) => {
          try {
            const { blogId } = params;
            const response = await fetch(
              `http://localhost:8000/blogs/post/${blogId}`,
              {
                credentials: 'include',
              }
            );

            if (response.ok) {
              const blogPost = await response.json();
              console.log(blogPost);
              const { author: profileId } = blogPost.data;

              let author = await fetch(
                `http://localhost:8000/profile/${profileId}`
              );

              if (author) {
                author = await author.json();
                return json({ author, blogPost });
              }
            }
            return null;
          } catch (err) {
            console.log(err);
            return null;
          }
        },
      },
    ],
  },
  {
    path: '/profile',
    element: <ProfileLayout />,
    children: [{ path: '/profile/:profileId', element: <Profile /> }],
  },
]);
function App() {
  // const { setUserDetails } = useContext(UserContext) as UserContextType;
  // const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        <RouterProvider router={routes}></RouterProvider>
        <ToastContainer />
      </UserContextProvider>
    </>
  );
}

export default App;
