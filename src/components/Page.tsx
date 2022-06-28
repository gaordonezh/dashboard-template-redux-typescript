import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { PageProps } from 'interfaces/global';

const Page = forwardRef(({ children, title }: PageProps, ref) => (
  <Box ref={ref}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <main>{children}</main>
  </Box>
));

export default Page;
