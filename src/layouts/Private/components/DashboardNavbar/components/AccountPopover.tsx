import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
import MenuPopover from 'components/MenuPopover';
import { useDispatch, useSelector } from 'react-redux';
import { StateGlobalProps } from 'interfaces/state';
import { openAccount, closeAccount } from 'store/slices/navbar';
import { useNavigate } from 'react-router-dom';

export default function AccountPopover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { account } = useSelector((state: StateGlobalProps) => state.navbar);

  const handleOpen = (event: any) => dispatch(openAccount(event));
  const handleClose = () => dispatch(closeAccount());

  const handleLogout = () => {
    handleClose();
    navigate('/');
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Avatar src="https://i.imgur.com/DhHShrp.jpg" alt="photoURL" />
      </IconButton>

      <MenuPopover open={account.open} anchorEl={account.ref} onClose={handleClose} sx={{}}>
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

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
