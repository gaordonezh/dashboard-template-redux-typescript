import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Drawer, Typography, Avatar } from '@mui/material';
import useResponsive from 'hooks/useResponsive';
import NavSection from './components/NavSection';
import { AccountStyle, RootStyleSidebar } from 'components/styled';
import { DRAWER_WIDTH } from 'utils/constants';
import { StateGlobalProps } from 'interfaces/state';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from 'store/slices/sidebar';

export default function DashboardSidebar() {
  const isDesktop = useResponsive('up', 'lg');
  const dispatch = useDispatch();
  const { open } = useSelector((state: StateGlobalProps) => state.sidebar);

  const handleToggleSidebar = () => dispatch(toggleSidebar());

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

      <NavSection />
    </Box>
  );

  return (
    <RootStyleSidebar>
      {!isDesktop && (
        <Drawer open={open} onClose={handleToggleSidebar} PaperProps={{ sx: { width: DRAWER_WIDTH } }}>
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
