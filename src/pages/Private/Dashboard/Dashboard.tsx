import Page from 'components/Page';
import { Button, Stack, Typography } from '@mui/material';

const Home = () => {
  return (
    <Page title="Dashboard">
      <Typography variant="h1">DASBOARD</Typography>
      <Stack direction="column" spacing={2} alignItems="center">
        <Button variant="contained"  size="large" color="primary">
          PRIMARY
        </Button>
        <Button variant="contained"  size="large" color="secondary">
          SECONDARY
        </Button>
        <Button variant="contained"  size="large" color="error">
          ERROR
        </Button>
        <Button variant="contained"  size="large" color="info">
          INFO
        </Button>
        <Button variant="contained"  size="large" color="success">
          SUCCESS
        </Button>
        <Button variant="contained"  size="large" color="warning">
          WARNING
        </Button>
        <Button variant="contained"  size="large" color="inherit">
          INHERIT
        </Button>
      </Stack>
    </Page>
  );
};

export default Home;
