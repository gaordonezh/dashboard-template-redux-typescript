import Page from 'components/Page';
import Content from 'components/Content';
import { Button, Typography } from '@mui/material';

const Products = () => {
  return (
    <Page title="Products">
      <Content
        title="PRODUCTS"
        helper="CONFIGURATION"
        component={
          <Button variant="contained" size="large">
            AGREGAR
          </Button>
        }
      >
        <Typography variant="h1">PRODUCTS</Typography>
      </Content>
    </Page>
  );
};

export default Products;
