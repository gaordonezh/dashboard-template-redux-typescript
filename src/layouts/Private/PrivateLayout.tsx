import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from './components/DashboardNavbar';
import DashboardSidebar from './components/DashboardSidebar';
import { MainStyle, RootStylePrivateLayout } from 'components/styled';

const PrivateLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <RootStylePrivateLayout>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStylePrivateLayout>
  );
};

export default PrivateLayout;
