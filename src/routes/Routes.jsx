import { createBrowserRouter } from 'react-router';
import App from '../App';
import RegisterCompany from '../components/RegisterCompany/RegisterCompany';
import RegisterUser from '../components/RegisterUser/RegisterUser';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

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
    ],
  },
]);

export default router;
