import { Button, Grid, Typography } from '@mui/material'
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh"  >
      <Grid item textAlign="center">
        <Typography variant="h2" component="h1"  >
          DASHBOARD BASE
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Dashboard base template using react, material-ui, redux and typescript.
        </Typography>
        <Button component={Link} to="/login" variant="contained" size="large">
          GO TO LOGIN
        </Button>
      </Grid>
    </Grid>
  )
}

export default LandingPage