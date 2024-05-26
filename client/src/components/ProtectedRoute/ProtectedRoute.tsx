import { ReactNode, useContext, useEffect } from 'react';
// import { useCookies } from 'react-cookie';
import { UserContext, UserContextType } from '../../contexts/UserContext';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { setUserDetails } = useContext(UserContext) as UserContextType;
  const navigate = useNavigate();
  const userInfo = useLoaderData();
  // const [cookies, removeCookies] = useCookies([]);
  console.log(userInfo);
  useEffect(() => {
    const verifyCookie = async () => {
      try {
        // if (cookies.token) {
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
            setUserDetails(userInfo);
            return;
          } else {
            setUserDetails({});
            navigate('/login', { replace: true });
          }
        }

        navigate('/login');
        // }
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    };
    verifyCookie();
  }, []);
  return <>{children}</>;
};

export default ProtectedRoute;
