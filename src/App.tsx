import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/react-query/QueryClient';

import { MantineProvider } from '@mantine/core';
import { IndexPageProvider } from './pages/IndexPageProvider';
import '@fontsource/caveat-brush';

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
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path='/' element={<IndexPageProvider />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </MantineProvider>
    </div>
  );
};
