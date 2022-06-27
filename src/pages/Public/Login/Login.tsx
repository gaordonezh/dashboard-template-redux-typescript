import { Link as RouterLink } from 'react-router-dom';
import { Link, Container, Typography } from '@mui/material';
import useResponsive from 'hooks/useResponsive';
import Page from 'components/Page';
import Logo from 'components/Logo';
import LoginForm  from './components/LoginForm';
import AuthSocial from './components/AuthSocial';
import { ContentStyle, LoginHeaderStyle, LoginRootStyle, SectionStyle } from 'components/styled';

const Login = () => {
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Login">
      <LoginRootStyle>
        <LoginHeaderStyle>
          <Logo disabledLink={false} />

          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Don’t have an account? {''}
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Get started
              </Link>
            </Typography>
          )}
        </LoginHeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/static/images/illustration_login.png" alt="login" />
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Sign in to Minimal
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter your details below.</Typography>

            <AuthSocial />

            <LoginForm />

            {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Get started
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </LoginRootStyle>
    </Page>
  );
}

export default Login