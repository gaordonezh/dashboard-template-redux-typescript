import { Button, Typography } from '@mui/material';
import Content from 'components/Content';
import Page from 'components/Page';

const Users = () => {
  return (
    <Page title="Usuarios">
      <Content
        title="USUARIOS"
        helper="CONFIGURACIÓN"
        component={
          <Button variant="contained" size="large">
            AGREGAR
          </Button>
        }
      >
        <Typography variant="h1">USERS</Typography>
      </Content>
    </Page>
  );
};

export default Users;
