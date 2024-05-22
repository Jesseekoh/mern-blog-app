import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainLayout from './layout/MainLayout';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';

import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './pages/CreatePost';
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
        element: <CreatePost />,
      },
    ],
  },
]);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
