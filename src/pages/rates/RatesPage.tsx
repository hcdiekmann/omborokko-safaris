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
  Button,
} from '@mantine/core';
import { useState } from 'react';
import { PriceTable } from './components/PriceTable';
import { Link } from 'react-router-dom';
import { IconCalendar } from '@tabler/icons-react';

type Year = '2023' | '2024' | '2025';

const rates = {
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
  '2025': {
    camping: [
      { id: 1, description: 'Adult per person per night ', price: 'N$ 325' },
      { id: 2, description: 'Children (16 or under)', price: 'N$ 225' },
      { id: 3, description: 'Extra firewood bag', price: 'N$ 50' },
    ],
    bed: [
      { id: 1, description: 'Adult per person per night', price: 'N$ 1500' },
    ],
  },
};

export const RatesPage = (): JSX.Element => {
  const [year, setYear] = useState<string | null>(new Date().getFullYear().toString());

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
            data={['2023', '2024', '2025']}
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
            {/* <Space h='xl' /> */}
            {/* <Title order={3}>Bed & Breakfast</Title>
            <Text fz='sm' c='dimmed'>
              Minimum two nights, no children
            </Text>
            <Divider mb={5} size='xs' />
            <PriceTable elements={rates[year as Year].bed} /> */}
          </>
        )}
        <Card>
          <Badge color='red' variant='light'>
            Please Note
          </Badge>
          <Text fz='sm' c='dimmed' ml={5}>
            All payments shall be made
            upfront upon arrival at the recpetion.
          </Text>
          <Group mt={15} position='center'>
            <Link to='/contact'>
              <Button leftIcon={<IconCalendar />}>Book Now</Button>
            </Link>
          </Group>
        </Card>
      </Card>
    </Container>
  );
};
