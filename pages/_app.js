import 'styles/global.scss';
import StaticStyles from '../styles';
import { ThemeProvider } from 'styled-components';

const theme = {
  white: '#f4f4f6',
  black: '#333333',
  red: '#eb5757',
  orange: '#F0B26D',
  lightBlue: '#b3dcf4'
};

function MakokosApp({ Component, pageProps }) {
  return (
    <div>
      <StaticStyles />
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MakokosApp;
