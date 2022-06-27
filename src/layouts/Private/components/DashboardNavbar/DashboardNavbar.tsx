import { Box, Stack, IconButton } from '@mui/material';
import Searchbar from './components/Searchbar';
import AccountPopover from './components/AccountPopover';
import NotificationsPopover from './components/NotificationsPopover';
import { Menu } from '@mui/icons-material';
import { RootStyle, ToolbarStyle } from 'components/styled';
import { DashboardNavbarProps } from 'interfaces/global';

export default function DashboardNavbar({ onOpenSidebar }: DashboardNavbarProps) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Menu />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={5}>
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
