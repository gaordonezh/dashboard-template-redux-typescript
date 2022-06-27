import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';
import { Box } from '@mui/material';

interface PageProps {
  title: string;
  children: ReactNode;
}

const Page = forwardRef(({ children, title }: PageProps, ref) => (
  <Box ref={ref}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <main>{children}</main>
  </Box>
));

export default Page;
