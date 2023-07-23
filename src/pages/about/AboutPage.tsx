import { Container, Title, Text, Card, SimpleGrid } from '@mantine/core';
import Balancer from 'react-wrap-balancer';

export const AboutPage = (): JSX.Element => {
  return (
    <Container mt={50}>
      <Card pt={5}>
        <Title size={40} order={2}>
          About us
        </Title>
        <SimpleGrid
          cols={2}
          verticalSpacing='sm'
          breakpoints={[{ maxWidth: '48rem', cols: 1, spacing: 'xl' }]}
        >
          <div>
            <Text>
              <Balancer>
                We are conveniently situated just 2 hours north of Windhoek, a
                gateway to the enchanting wilderness of our beautiful country.
              </Balancer>
            </Text>
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.3407379474684!2d16.720677214551458!3d-20.898606674552536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bf4d0a1bbde997f%3A0xfc41348745a0467e!2sOmborokko%20Safaris!5e0!3m2!1sde!2sna!4v1660646268646!5m2!1sde!2sna'
            width={'100%'}
            height={'350'}
            loading='lazy'
          ></iframe>
        </SimpleGrid>
      </Card>
    </Container>
  );
};
