import ScrollToTop from 'components/ScrollToTop';
import Router from 'routes';
import ThemeProvider from 'theme';
//import moment from 'moment-timezone';

const App = () => {
  //moment.tz.setDefault('America/Lima');

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
};

export default App;
