import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Link, Drawer, Typography, Avatar } from '@mui/material';
import useResponsive from 'hooks/useResponsive';
import NavSection from './components/NavSection';
import navConfig from './components/NavConfig';
import { AccountStyle, RootStyleSidebar } from 'components/styled';
import { DRAWER_WIDTH } from 'utils/constants';
import { DashboardSidebarProps } from 'interfaces/global';

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }: DashboardSidebarProps) {
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Box sx={{ height: '100vh' }}>
      <Box p={1}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src="https://i.imgur.com/DhHShrp.jpg" alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" color="text.primary">
                GERMAN ORDOÑEZ
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ADMINISTRADOR
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={navConfig} />
    </Box>
  );

  return (
    <RootStyleSidebar>
      {!isDesktop && (
        <Drawer open={isOpenSidebar} onClose={onCloseSidebar} PaperProps={{ sx: { width: DRAWER_WIDTH } }}>
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer open variant="persistent" PaperProps={{ sx: { width: DRAWER_WIDTH, bgcolor: 'background.default' } }}>
          {renderContent}
        </Drawer>
      )}
    </RootStyleSidebar>
  );
}
