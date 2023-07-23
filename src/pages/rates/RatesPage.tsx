import { Title, Container, Card, Space, Text, Badge } from '@mantine/core';
import { PriceTable } from './components/PriceTable';

const campingElements = [
  { id: 1, description: 'Adult per person per night ', price: 'N$ 250' },
  { id: 2, description: 'Children (16 or under)', price: 'N$ 150' },
  { id: 3, description: 'Extra firewood bag', price: 'N$ 50' },
];

const bedElements = [
  { id: 1, description: 'Adult per person per night', price: 'N$ 850' },
];

export const RatesPage = (): JSX.Element => {
  return (
    <Container mt={50}>
      <Card shadow='md' radius='md'>
        <Title order={2} align='center'>
          Our Rates
        </Title>
        <Title order={3}>Camping</Title>
        <PriceTable elements={campingElements} />
        <Space h='lg' />
        <Title order={3}>Bed & Breakfast</Title>
        <PriceTable elements={bedElements} />
        <Card>
          <Badge color='yellow' variant='light'>
            Please Note
          </Badge>
          <Text fz='sm' c='dimmed' ml={5}>
            We currently only accept cash payments. All payments shall be made
            upfront upon arrival.
          </Text>
        </Card>
      </Card>
    </Container>
  );
};
