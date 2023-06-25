import { Container } from '@mantine/core';
import { CarouselComponent } from './components/CarouselComponent';

export const HomePage = (): JSX.Element => {
  return (
    <Container style={{ marginTop: 150 }}>
      <CarouselComponent />
    </Container>
  );
};
