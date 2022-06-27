import { useState, useRef } from 'react';
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  IconButton,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from '@mui/material';
import Scrollbar from 'components/Scrollbar';
import MenuPopover from 'components/MenuPopover';
import { Face, Notifications } from '@mui/icons-material';

export default function NotificationsPopover() {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton ref={anchorRef} color={open ? 'primary' : 'default'} onClick={handleOpen} sx={{ width: 40, height: 40 }}>
        <Badge badgeContent={10} color="error">
          <Notifications />
        </Badge>
      </IconButton>

      <MenuPopover open={Boolean(open)} anchorEl={open} onClose={handleClose} sx={{ width: 360, p: 0, mt: 1.5, ml: 0.75 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              You have {10} unread messages
            </Typography>
          </Box>

          <Tooltip title=" Mark all as read">
            <IconButton color="primary">
              <Face />
            </IconButton>
          </Tooltip>
        </Box>

        <Divider />

        <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                New
              </ListSubheader>
            }
          >
            {[1, 2].map((item, index) => (
              <NotificationItem key={index} />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Before that
              </ListSubheader>
            }
          >
            {[1, 2, 3].map((item, index) => (
              <NotificationItem key={index} />
            ))}
          </List>
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            View All
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

function NotificationItem() {
  return (
    <ListItemButton sx={{ py: 1.5, px: 2.5, mt: '1px' }}>
      <ListItemAvatar>
        <Avatar src="https://i.imgur.com/DhHShrp.jpg" alt="Image" />
      </ListItemAvatar>
      <ListItemText
        primary="TITLE"
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <Face />
            10/07/2022
          </Typography>
        }
      />
    </ListItemButton>
  );
}
