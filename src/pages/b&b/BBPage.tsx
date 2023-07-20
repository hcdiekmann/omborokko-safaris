import {
  Title,
  Container,
  Card,
  Text,
  List,
  SimpleGrid,
  ThemeIcon,
} from '@mantine/core';
import {
  IconSwimming,
  IconFridge,
  IconGrill,
  IconBath,
  IconWifi,
} from '@tabler/icons-react';
import Balancer from 'react-wrap-balancer';

export const BBPage = (): JSX.Element => {
  return (
    <Container mt={100}>
      <Card>
        <Title order={2} size={40}>
          Bed & Breakfast
        </Title>
        <SimpleGrid
          cols={2}
          spacing={60}
          verticalSpacing='sm'
          breakpoints={[{ maxWidth: '48rem', cols: 1, spacing: 'xl' }]}
        >
          <div>
            <Text>
              <Balancer>
                Relish in comfort while still being a heartbeat away from the
                wilderness, witnessing the serene Namibian sunsets right from
                your doorstep. An outdoor undercover patio can be used to relax
                and read a book while enjoying the astonishing view of the
                Omborokko mountains. Breakfast will also be served outside on
                the patio.
              </Balancer>
            </Text>
          </div>
          <div>
            <Text fw={700}>Amenities</Text>
            <List fw={500} mt={5} spacing='xs' size='sm' center>
              <List.Item
                icon={
                  <ThemeIcon color='yellow' size={24}>
                    <IconWifi size='1rem' />
                  </ThemeIcon>
                }
              >
                Wireless Internet
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color='yellow' size={24}>
                    <IconFridge size='1rem' />
                  </ThemeIcon>
                }
              >
                Fridge
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color='yellow' size={24}>
                    <IconBath size='1rem' />
                  </ThemeIcon>
                }
              >
                Fully equipped bathroom
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color='yellow' size={24}>
                    <IconSwimming size='1rem' />
                  </ThemeIcon>
                }
              >
                Swimming pool
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color='yellow' size={24}>
                    <IconGrill size='1rem' />
                  </ThemeIcon>
                }
              >
                Fireplace with grill
              </List.Item>
            </List>
          </div>
        </SimpleGrid>
      </Card>
    </Container>
  );
};
