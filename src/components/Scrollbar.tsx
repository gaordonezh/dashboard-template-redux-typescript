import { ScrollbarProps } from 'interfaces/global';
import { CustomScrollBar } from './styled';

const Scrollbar = ({ children, sx }: ScrollbarProps) => <CustomScrollBar sx={{ overflowY: 'auto', ...sx }}>{children}</CustomScrollBar>;

export default Scrollbar;
