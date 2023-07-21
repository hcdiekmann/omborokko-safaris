import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/react-query/QueryClient';

import { MantineProvider } from '@mantine/core';
import {
  FullAboutPage,
  FullBBPage,
  FullCampingPage,
  FullContactPage,
  FullHomePage,
  FullRatesPage,
} from './pages/PageProvider';
import '@fontsource/caveat-brush';
import { Notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = (): JSX.Element => {
  return (
    <div
      className='App'
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/pictures/webp/home_bg.webp')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <MantineProvider
        theme={{
          colors: {
            logoGrey: [
              '#E4E3E3',
              '#E4E3E3',
              '#E4E3E3',
              '#E4E3E3',
              '#E4E3E3',
              '#E4E3E3',
              '#E4E3E3',
              '#E4E3E3',
              '#E4E3E3',
              '#E4E3E3',
            ],
          },
          primaryColor: 'yellow',
          // white: '#E4E3E3',
          headings: {
            // properties for all headings
            fontWeight: 400,
            fontFamily: '"Caveat Brush", cursive;',

            // properties for individual headings, all of them are optional
            sizes: {
              h1: { fontWeight: 100, fontSize: '2.8rem', lineHeight: 0.8 },
              h2: { fontSize: '2.2rem', lineHeight: 1.5 },
            },
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications />
        <QueryClientProvider client={queryClient}>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<FullHomePage />} />
              <Route path='/about' element={<FullAboutPage />} />
              <Route path='/rates' element={<FullRatesPage />} />
              <Route path='/contact' element={<FullContactPage />} />
              <Route path='/camping' element={<FullCampingPage />} />
              <Route path='/b&b' element={<FullBBPage />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </MantineProvider>
    </div>
  );
};
