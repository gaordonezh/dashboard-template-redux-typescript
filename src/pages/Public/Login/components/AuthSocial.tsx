import { Facebook, Google, Twitter } from '@mui/icons-material';
import { Stack, Button, Divider, Typography } from '@mui/material';

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Google />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Facebook />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Twitter />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
