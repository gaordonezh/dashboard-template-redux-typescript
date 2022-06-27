import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './components/DashboardNavbar';
import DashboardSidebar from './components/DashboardSidebar';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 45;
const APPBAR_DESKTOP = 65;
const APPBAR_PADDING = 10;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APPBAR_MOBILE + APPBAR_PADDING,
  paddingBottom: APPBAR_PADDING,
  paddingLeft: APPBAR_PADDING,
  paddingRight: APPBAR_PADDING,
  [theme.breakpoints.up('lg')]: {
    paddingTop: APPBAR_DESKTOP + APPBAR_PADDING,
  },
}));

const PrivateLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default PrivateLayout;
