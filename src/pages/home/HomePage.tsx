import { Container } from '@mantine/core';
import { CarouselComponent } from './components/CarouselComponent';

interface HomePageProps {
  setPage: (page: string) => void;
}

export const HomePage = ({ setPage }: HomePageProps): JSX.Element => {
  return (
    <Container mt={100}>
      <CarouselComponent setPage={setPage} />
    </Container>
  );
};
