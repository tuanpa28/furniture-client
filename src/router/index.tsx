import AdminLayout from '@/layouts/AdminLayout';
import DefaultLayout from '@/layouts/DefaultLayout';
import Dashboard from '@/pages/Admin/Dashboard';
import Home from '@/pages/Home';
import Signin from '@/pages/Signin';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  // Client
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  // Admin
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='dashboard' />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: 'sign-in',
    element: <Signin />,
  },
]);

export default router;
