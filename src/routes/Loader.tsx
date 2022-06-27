import LinearProgress from '@mui/material/LinearProgress';
import { ProgressBar } from 'components/styled';

const Loader = () => (
  <ProgressBar>
    <LinearProgress color="primary" />
  </ProgressBar>
);

export default Loader;
