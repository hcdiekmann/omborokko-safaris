import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/react-query/QueryClient';

import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { IndexPageProvider } from './pages/IndexPageProvider';

export const App = (): JSX.Element => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className='App'>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
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
      </ColorSchemeProvider>
    </div>
  );
};
