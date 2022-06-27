import { Grid, Stack, Typography } from '@mui/material';

const Page401 = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="90vh">
      <Grid item>
        <Stack spacing={10} textAlign="center">
          <img src="/static/images/illustration_404.svg" alt="404" />
          <Typography variant="h2" component="h1">
            NOT AUTHORIZED
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Page401;
