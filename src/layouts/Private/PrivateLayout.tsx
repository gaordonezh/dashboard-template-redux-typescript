import { Outlet } from 'react-router-dom';
import DashboardNavbar from './components/DashboardNavbar';
import DashboardSidebar from './components/DashboardSidebar';
import { MainStyle, RootStylePrivateLayout } from 'components/styled';

const PrivateLayout = () => (
  <RootStylePrivateLayout>
    <DashboardNavbar />
    <DashboardSidebar />
    <MainStyle>
      <Outlet />
    </MainStyle>
  </RootStylePrivateLayout>
);

export default PrivateLayout;
