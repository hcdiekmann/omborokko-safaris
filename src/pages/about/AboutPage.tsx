import { Container, Title, Text, Card, SimpleGrid } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';
import Balancer from 'react-wrap-balancer';

export const AboutPage = (): JSX.Element => {
  return (
    <Container mt={20}>
      <Card p={15} pt={5} radius='md'>
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
                Omborokko Safaris, a family-owned cattle farm, nestles in the
                heart of Namibia's breathtaking landscape. Located just two
                hours north of Windhoek, it serves as a gateway to the
                enchanting wilderness that encapsulates the essence of our
                beautiful country. <br></br>Whether you are an adventure-seeker
                looking to explore the rugged terrains or someone seeking a
                tranquil escape from the bustling city life, Omborokko Safaris
                has something for everyone. We offer a variety of accommodation
                options ranging from camping to bed and breakfast.
              </Balancer>
            </Text>
            <div
              style={{
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconQuote
                size={30}
                style={{ marginRight: '15px', color: '#888' }}
              />
              <Text size={18} style={{ fontStyle: 'italic' }}>
                "Great facilities, spotlessly clean and lovely owners."
              </Text>
            </div>
            <Text
              size={14}
              style={{ textAlign: 'right', marginTop: '8px', color: '#aaa' }}
            >
              - Google Review
            </Text>
          </div>
          <iframe
            title='Google Maps Omborokko Safaris'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.3187037577013!2d16.7204197!3d-20.8994937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bf4d0a1bbde997f%3A0xfc41348745a0467e!2sOmborokko%20Safaris!5e0!3m2!1sen!2snz!4v1690864712755!5m2!1sen!2s'
            width={'100%'}
            height={'350'}
            loading='lazy'
          ></iframe>
        </SimpleGrid>
      </Card>
    </Container>
  );
};
