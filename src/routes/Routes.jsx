import { createBrowserRouter } from 'react-router';
import App from '../App';
import LoginCompany from '../components/LoginCompany/LoginCompany';
import LoginUser from '../components/LoginUser/LoginUser';
import RegisterCompany from '../components/RegisterCompany/RegisterCompany';
import RegisterUser from '../components/RegisterUser/RegisterUser';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import UserDashboardPage from '../pages/UserDashboardPage';
import ProtectedRoute from './ProtectedRoute';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
        children: [
          {
            path: 'userLogin',
            element: <LoginUser />,
          },
          {
            path: 'companyLogin',
            element: <LoginCompany />,
          },
        ],
      },
      {
        path: '/register',
        element: <RegisterPage />,
        children: [
          {
            path: 'userRegister',
            element: <RegisterUser />,
          },
          {
            path: 'companyRegister',
            element: <RegisterCompany />,
          },
        ],
      },
      {
        path: '/user-dashboard',
        element: (
          <ProtectedRoute>
            <UserDashboardPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
