import { AppShell } from '@mantine/core';
import { HeaderMenu } from './HeaderMenuComponent';
import { FooterCentered } from './FooterComponent';

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
      link: '/about',
      label: 'About',
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
      header={<HeaderMenu Logo={'/pictures/black.png'} links={links} />}
      footer={
        <FooterCentered Logo={'/pictures/black.png'} links={links} />
      }
    >
      {props.children}
    </AppShell>
  );
};
