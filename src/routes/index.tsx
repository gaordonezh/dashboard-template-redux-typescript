import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Loadable from './Loadable';
// layouts
const PrivateLayout = Loadable(lazy(() => import('layouts/Private')));
const PublicLayout = Loadable(lazy(() => import('layouts/Public')));
// private views
const Dashboard = Loadable(lazy(() => import('pages/Private/Dashboard')));
const Users = Loadable(lazy(() => import('pages/Private/Users')));
const Products = Loadable(lazy(() => import('pages/Private/Products')));
// public views
const Landing = Loadable(lazy(() => import('pages/Public/Landing')));
const Login = Loadable(lazy(() => import('pages/Public/Login')));
// other views
//const Page401 = Loadable(lazy(() => import('pages/Others/401')));
const Page404 = Loadable(lazy(() => import('pages/Others/404')));
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: 'admin',
      element: <PrivateLayout />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'users', element: <Users /> },
        { path: 'products', element: <Products /> },
        { path: '*', element: <Page404 /> },
      ],
    },
    {
      path: '',
      element: <PublicLayout />,
      children: [
        { path: '', element: <Landing /> },
        { path: 'login', element: <Login /> },
        { path: '*', element: <Page404 /> },
      ],
    },
  ]);
}
