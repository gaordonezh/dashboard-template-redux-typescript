import { Apps, Bento, BrokenImage, Group } from '@mui/icons-material';

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: <Apps />,
  },
  {
    title: 'users',
    path: '/admin/users',
    icon: <Group />,
  },
  {
    title: 'product',
    icon: <Bento />,
    children: [{ title: 'Product list', path: '/admin/products' }],
  },
  {
    title: '404',
    path: '/admin/404',
    icon: <BrokenImage />,
  },
];

export default navConfig;
