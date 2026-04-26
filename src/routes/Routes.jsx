import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomePage from '../pages/HomePage';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
