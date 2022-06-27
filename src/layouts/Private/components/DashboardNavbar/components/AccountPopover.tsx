import { useRef, useState } from 'react';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
import MenuPopover from 'components/MenuPopover';

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => setOpen(event.currentTarget);
  const handleClose = () => setOpen(null);

  return (
    <>
      <IconButton ref={anchorRef} onClick={handleOpen}>
        <Avatar src="https://i.imgur.com/DhHShrp.jpg" alt="photoURL" />
      </IconButton>

      <MenuPopover open={Boolean(open)} anchorEl={open} onClose={handleClose} sx={{}}>
        <Box p={1}>
          <Typography variant="subtitle2" noWrap>
            GERMAN ORDOÑEZ
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            gaordonezh_loremipsum@gmail.com
          </Typography>
        </Box>

        <Divider />

        <Stack sx={{ p: 1 }}>
          {[1, 2, 3].map((option, index) => (
            <MenuItem key={index} onClick={handleClose}>
              Menu item {index + 1}
            </MenuItem>
          ))}
        </Stack>

        <Divider />

        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
