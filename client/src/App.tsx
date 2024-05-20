import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/blogs',
        element: <Blogs />,
      },
    ],
  },
]);

function App() {
  // const [count, setCount] = useState(0);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
