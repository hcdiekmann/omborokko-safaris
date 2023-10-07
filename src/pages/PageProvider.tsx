import { AppShellComponent } from '../components/Appshell/AppShellComponent';
import { HomePage } from './home/HomePage';
import { RatesPage } from './rates/RatesPage';
import { ContactPage } from './contact/ContactPage';
import { CampingPage } from './accomodation/camping/CampingPage';
import { BBPage } from './accomodation/b&b/BBPage';
import { AboutPage } from './about/AboutPage';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wallpaper_bg: {
    backgroundImage:
      "linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url('/pictures/webp/home_bg.webp')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  color_bg: {
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-40deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][9]} 100%)`,
  },
}));

export const FullHomePage = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className={classes.wallpaper_bg}>
      <AppShellComponent>
        <HomePage />
      </AppShellComponent>
    </div>
  );
};

export const FullAboutPage = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className={classes.color_bg}>
      <AppShellComponent>
        <AboutPage />
      </AppShellComponent>
    </div>
  );
};

export const FullRatesPage = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className={classes.color_bg}>
      <AppShellComponent>
        <RatesPage />
      </AppShellComponent>
    </div>
  );
};

export const FullContactPage = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className={classes.color_bg}>
      <AppShellComponent>
        <ContactPage />
      </AppShellComponent>
    </div>
  );
};

export const FullCampingPage = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className={classes.color_bg}>
      <AppShellComponent>
        <CampingPage />
      </AppShellComponent>
    </div>
  );
};

export const FullBBPage = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className={classes.color_bg}>
      <AppShellComponent>
        <BBPage />
      </AppShellComponent>
    </div>
  );
};
