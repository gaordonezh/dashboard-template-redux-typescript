import { Apps } from '@mui/icons-material';

const getIcon = () => <Apps />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: getIcon(),
  },
  {
    title: 'user',
    path: '/admin/users',
    icon: getIcon(),
  },
  {
    title: 'product',
    icon: getIcon(),
    children: [
      { title: 'product 1', path: '/admin/products' },
      { title: 'product 2', path: '/admin/products' },
      { title: 'product 3', path: '/admin/products' },
      { title: 'product 4', path: '/admin/products' },
    ],
  },
  {
    title: 'end',
    path: '/admin/products',
    icon: getIcon(),
  },
];

export default navConfig;
