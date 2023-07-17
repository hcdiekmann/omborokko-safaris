import { Container } from '@mantine/core';
import { CarouselComponent } from './components/CarouselComponent';

export const HomePage = (): JSX.Element => {
  return (
    <Container mt={100}>
      <CarouselComponent />
    </Container>
  );
};
