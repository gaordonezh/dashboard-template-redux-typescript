import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

const CustomScrollBar = styled('div')(({ theme }) => ({
  '&::-webkit-scrollbar': {
    width: 5,
    height: 5,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.dark,
    borderRadius: 5,
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.main,
  },
  '&::-webkit-scrollbar-thumb:active': {
    backgroundColor: theme.palette.primary.light,
  },
  '&::-webkit-scrollbar-track': {
    background: '#BBB',
    borderRadius: 5,
  },
  '&::-webkit-scrollbar-track:hover': {
    background: '#AAA',
  },
  '&::-webkit-scrollbar-track:active': {
    background: '#CCC',
  },
}));

interface ScrollbarProps {
  children: ReactNode;
  sx: object;
}

const Scrollbar = ({ children, sx }: ScrollbarProps) => <CustomScrollBar sx={{ overflowY: 'auto', ...sx }}>{children}</CustomScrollBar>;

export default Scrollbar;
