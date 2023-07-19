import { AppShell } from '@mantine/core';
import { HeaderMenu } from './components/HeaderMenuComponent';
import { FooterCentered } from './components/FooterComponent';

interface AppShellProps {
  children: JSX.Element;
  setPage: (page: string) => void;
}

export const AppShellComponent = (props: AppShellProps) => {
  const links = [
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
          label: 'Bed & Breakfast',
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
  ];

  return (
    <AppShell
      header={
        <HeaderMenu
          Logo={'/pictures/Logo_no_bg.png'}
          links={links}
          setPage={props.setPage}
        />
      }
      footer={
        <FooterCentered
          Logo={'/pictures/Logo_no_bg.png'}
          links={links}
          setPage={props.setPage}
        />
      }
    >
      {props.children}
    </AppShell>
  );
};
