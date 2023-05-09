import 'styles/global.scss';
import StaticStyles from '../styles';
import { ThemeProvider } from 'styled-components';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const brandon = localFont({
  src: [
    {
      path: 'fonts/Brandon_med.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Brandon_med_it.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'fonts/Brandon_light.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: 'fonts/Brandon_light_it.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: 'fonts/Brandon_bld.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/Brandon_bld_it.otf',
      weight: '700',
      style: 'italic',
    },
  ],
});

const handelson = localFont({ src: 'fonts/handelson.otf' });

const theme = {
  white: '#E8F6FF',
  black: '#333333',
  red: '#eb5757',
  orange: '#F0B26D',
  lightBlue: '#b3dcf4',
  turquoise: '#1C82AF',
  fonts: {
    brandon: brandon.style,
    handelson: handelson.style
  }
};

function MakokosApp({ Component, pageProps }) {
  return (
    <main className={brandon.className}>
      <StaticStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}

export default MakokosApp;
