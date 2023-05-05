import { AppShell, MantineProvider } from '@mantine/core';
import { HeaderMenu } from './components/HeaderMenuComponent';
import '@fontsource/rock-salt';
import '@fontsource/caveat-brush';
import '@fontsource/stylish';

interface AppShellProps {
  children: JSX.Element;
  setPage: (page: string) => void;
}

export const AppShellComponent = (props: AppShellProps) => {
  const links = [
    {
      links: [
        {
          link: '/home',
          label: 'Home',
        },
        {
          link: '/accommodation',
          label: 'Accommadation',
          links: [
            {
              link: '/camping',
              label: 'Remote Camping',
            },
            {
              link: '/b&b',
              label: 'Farmhouse B&B',
            },
          ],
        },
        {
          link: '/rates',
          label: 'Rates',
        },
        {
          link: '/contact',
          label: 'Contact',
        },
      ],
    },
  ];

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
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
        primaryColor: 'logoGrey',
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
    >
      <AppShell
        header={
          <HeaderMenu
            Logo={'/pictures/Logo.png'}
            links={links[0].links as any[]}
            setPage={props.setPage}
          />
        }
      >
        {props.children}
      </AppShell>
    </MantineProvider>
  );
};
