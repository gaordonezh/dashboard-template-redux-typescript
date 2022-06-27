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
        <Typography variant="h1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus amet cupiditate, molestias vitae incidunt animi sit, vero, nulla enim
          corrupti est dicta! Aliquam accusamus voluptatem quod animi doloremque inventore similique nobis veritatis praesentium ea molestiae
          aspernatur quidem, vero expedita magni fugit quae dolorum voluptate quasi quisquam nostrum. Necessitatibus, quidem laborum.
        </Typography>
      </Content>
    </Page>
  );
};

export default Users;
