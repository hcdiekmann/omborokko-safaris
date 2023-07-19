import { useState } from 'react';
import { AppShellComponent } from '../components/Appshell/AppShellComponent';
import { HomePage } from './home/HomePage';
import { RatesPage } from './rates/RatesPage';
import { ContactPage } from './contact/ContactPage';
import { CampingPage } from './camping/CampingPage';
import { BBPage } from './b&b/BBPage';

export const IndexPageProvider = (): JSX.Element => {
  const [page, setPage] = useState('/home');

  function render() {
    switch (page) {
      case '/home':
        return <HomePage setPage={setPage} />;
      case '/rates':
        return <RatesPage />;
      case '/contact':
        return <ContactPage />;
      case '/camping':
        return <CampingPage />;
      case '/b&b':
        return <BBPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  }

  return <AppShellComponent setPage={setPage}>{render()}</AppShellComponent>;
};
