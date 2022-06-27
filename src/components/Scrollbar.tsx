import PerfectScrollBar from 'react-perfect-scrollbar';
import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface ScrollbarProps {
  children: ReactNode;
  sx: object;
}

const Scrollbar = ({ children, sx }: ScrollbarProps) => (
  <Box>
    <PerfectScrollBar style={{ overflow: 'hidden', ...sx }}>{children}</PerfectScrollBar>
  </Box>
);

export default Scrollbar;
