import { Container } from '@mantine/core';
import { WelcomeText } from './components/WelcomeText';
import { CarouselComponent } from './components/CarouselComponent';

export const HomePage = (): JSX.Element => {
  return (
    <Container mt={50}>
      <WelcomeText />
      <CarouselComponent />
    </Container>
  );
};
