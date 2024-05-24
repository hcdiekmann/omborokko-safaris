import { Container, Title, Text, Button, Group } from '@mantine/core';
import { CarouselComponent } from './components/CarouselComponent';
import Balancer from 'react-wrap-balancer';
import { Link } from 'react-router-dom';

import { CampingPage } from '../accomodation/camping/CampingPage';

export const HomePage = (): JSX.Element => {
  return (
    <Container mt={50}>
      <div style={{ textAlign: 'center' }}>
        <Balancer>
          <Title size={70} order={1} style={{ color: 'whitesmoke' }}>
            Welcome to Omborokko Safaris
          </Title>
          <Text size={20} weight={350} mt={10} mb={10} color='white'>
            Sprawling over a vast 6000-hectare plain, our cattle farm is a
            thriving sanctuary for Namibia's diverse wildlife. Whether you
            choose the raw allure of camping or the comfortable charm of our
            B&B, we assure you an unforgettable encounter with Namibia's
            extraordinary landscape and wildlife.
          </Text>
        </Balancer>
      </div>
      <CarouselComponent />
      <CampingPage />
      <Group mt={15} position='center'>
        <Link to='/about'>
          <Button>More information about us</Button>
        </Link>
      </Group>
    </Container>
  );
};
