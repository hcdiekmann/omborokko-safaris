import { AppShell } from '@mantine/core';
import { HeaderMenu } from './components/HeaderMenuComponent';
import { FooterCentered } from './components/FooterComponent';

interface AppShellProps {
  children: JSX.Element;
}

export const AppShellComponent = (props: AppShellProps) => {
  const links = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/camping',
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
      header={<HeaderMenu Logo={'/pictures/Logo_no_bg.png'} links={links} />}
      footer={
        <FooterCentered Logo={'/pictures/Logo_no_bg.png'} links={links} />
      }
    >
      {props.children}
    </AppShell>
  );
};
