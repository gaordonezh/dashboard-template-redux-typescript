import { Apps, Bento, BrokenImage, Group } from '@mui/icons-material';
import { NavConfigProps } from 'interfaces/global';

const NavConfig: Array<NavConfigProps> = [
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

export default NavConfig;
