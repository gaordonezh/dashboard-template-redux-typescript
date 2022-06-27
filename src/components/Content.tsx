import { Grid, Typography, FormHelperText, Paper, Box } from '@mui/material';
import { ContentProps } from 'interfaces/global';
import Scrollbar from './Scrollbar';

const Content = ({ title, helper, component, children }: ContentProps) => {
  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Grid container spacing={1} justifyContent="space-between" alignItems="center">
          <Grid item>
            {helper && <FormHelperText>{helper}</FormHelperText>}
            {title && <Typography variant="h4">{title}</Typography>}
          </Grid>
          {component && <Grid item>{component}</Grid>}
          <Grid item xs={12}>
            <Scrollbar sx={{ height: 'calc((100vh) - 185px)' }}>{children}</Scrollbar>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Content;
