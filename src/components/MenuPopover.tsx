import { Popover } from '@mui/material';
import { MenuPopoverProps } from 'interfaces/global';
import { ArrowStyle } from 'components/styled';

const MenuPopover = ({ children, sx, open, anchorEl, onClose, ...other }: MenuPopoverProps) => {
  return (
    <Popover
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{ sx: { p: 1, width: 250, overflow: 'inherit', ...sx } }}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      {...other}
    >
      <ArrowStyle />
      {children}
    </Popover>
  );
};

export default MenuPopover;
