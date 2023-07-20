import { Container } from '@mantine/core';
import { WelcomeText } from './components/WelcomeText';
import { CarouselComponent } from './components/CarouselComponent';

interface HomePageProps {
  setPage: (page: string) => void;
}

export const HomePage = ({ setPage }: HomePageProps): JSX.Element => {
  return (
    <Container mt={75}>
      <WelcomeText />
      <CarouselComponent setPage={setPage} />
    </Container>
  );
};
