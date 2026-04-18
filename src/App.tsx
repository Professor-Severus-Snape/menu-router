import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import DriftPage from './pages/DriftPage/DriftPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ForzaPage from './pages/ForzaPage/ForzaPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TimeAttackPage from './pages/TimeAttackPage/TimeAttackPage';

const App = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'drift', element: <DriftPage /> },
        { path: 'timeattack', element: <TimeAttackPage /> },
        { path: 'forza', element: <ForzaPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ];

  const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL }); // 'base' vite

  return <RouterProvider router={router} />;
};

export default App;
