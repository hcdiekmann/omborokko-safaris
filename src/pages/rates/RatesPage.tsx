import {
  Title,
  Container,
  Card,
  Space,
  Text,
  Badge,
  Divider,
  Select,
  Group,
} from '@mantine/core';
import { ElementType, useState } from 'react';
import { PriceTable } from './components/PriceTable';

type Year = '2022' | '2023' | '2024';

const rates = {
  '2022': {
    camping: [
      { id: 1, description: 'Adult per person per night ', price: 'N$ 220' },
      { id: 2, description: 'Children (16 or under)', price: 'N$ 180' },
      { id: 3, description: 'Extra firewood bag', price: 'N$ 40' },
    ],
    bed: [
      { id: 1, description: 'Adult per person per night', price: 'N$ 850' },
    ],
  },
  '2023': {
    camping: [
      { id: 1, description: 'Adult per person per night ', price: 'N$ 250' },
      { id: 2, description: 'Children (16 or under)', price: 'N$ 150' },
      { id: 3, description: 'Extra firewood bag', price: 'N$ 50' },
    ],
    bed: [
      { id: 1, description: 'Adult per person per night', price: 'N$ 950' },
    ],
  },
  '2024': {
    camping: [
      { id: 1, description: 'Adult per person per night ', price: 'N$ 300' },
      { id: 2, description: 'Children (16 or under)', price: 'N$ 200' },
      { id: 3, description: 'Extra firewood bag', price: 'N$ 50' },
    ],
    bed: [
      { id: 1, description: 'Adult per person per night', price: 'N$ 1200' },
    ],
  },
  // ... add more year rates here ...
};

export const RatesPage = (): JSX.Element => {
  const [year, setYear] = useState<string | null>('2023');

  return (
    <Container mt={20}>
      <Card shadow='md' radius='md'>
        <Group position='apart' spacing={5} mb={'lg'}>
          <Title order={2} align='center' size={40}>
            Our Rates
          </Title>
          <Select
            label='Year'
            value={year}
            onChange={setYear}
            data={['2022', '2023', '2024']}
          />
        </Group>
        {year && (
          <>
            <Title order={3}>Camping</Title>
            <Text fz='sm' c='dimmed'>
              Includes 1 free bag of firewood
            </Text>
            <Divider mb={5} size='xs' />
            <PriceTable elements={rates[year as Year].camping} />
            <Space h='xl' />
            <Title order={3}>Bed & Breakfast</Title>
            <Text fz='sm' c='dimmed'>
              Minimum two nights, no children
            </Text>
            <Divider mb={5} size='xs' />
            <PriceTable elements={rates[year as Year].bed} />
          </>
        )}
        <Card>
          <Badge color='red' variant='light'>
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
