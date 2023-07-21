import { AppShellComponent } from '../components/Appshell/AppShellComponent';
import { HomePage } from './home/HomePage';
import { RatesPage } from './rates/RatesPage';
import { ContactPage } from './contact/ContactPage';
import { CampingPage } from './camping/CampingPage';
import { BBPage } from './b&b/BBPage';

export const FullHomePage = (): JSX.Element => {
  return (
    <AppShellComponent>
      <HomePage />
    </AppShellComponent>
  );
};

export const FullRatesPage = (): JSX.Element => {
  return (
    <AppShellComponent>
      <RatesPage />
    </AppShellComponent>
  );
};

export const FullContactPage = (): JSX.Element => {
  return (
    <AppShellComponent>
      <ContactPage />
    </AppShellComponent>
  );
};

export const FullCampingPage = (): JSX.Element => {
  return (
    <AppShellComponent>
      <CampingPage />
    </AppShellComponent>
  );
};

export const FullBBPage = (): JSX.Element => {
  return (
    <AppShellComponent>
      <BBPage />
    </AppShellComponent>
  );
};
