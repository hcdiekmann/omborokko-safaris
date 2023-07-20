import {
  Title,
  Container,
  Card,
  Text,
  List,
  ThemeIcon,
  SimpleGrid,
} from '@mantine/core';
import { Balancer } from 'react-wrap-balancer';
import {
  IconBath,
  IconBottle,
  IconCampfire,
  IconToiletPaper,
} from '@tabler/icons-react';

export const CampingPage = (): JSX.Element => {
  return (
    <Container mt={100}>
      <Card>
        <Title order={2} size={40}>
          Remote Camping
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
                For those who seek an immersive natural experience, our remote
                camping sites provide a unique chance to dwell in the midst of
                Namibia's untouched beauty. Located next to a seasonal river,
                and tucked away at the foot of the majestic Omborokko Mountains,
                our campsites offer a genuine encounter with the tranquil
                Namibian bush.
              </Balancer>
            </Text>
          </div>
          <div>
            <Text fw={700}>Amenities</Text>
            <List fw={500} mt={5} spacing='xs' size='sm' center>
              <List.Item
                icon={
                  <ThemeIcon color='yellow' size={24}>
                    <IconCampfire size='1rem' />
                  </ThemeIcon>
                }
              >
                Firepit with grill
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color='yellow' size={24}>
                    <IconBottle size='1rem' />
                  </ThemeIcon>
                }
              >
                Fresh drinking water
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color='yellow' size={24}>
                    <IconToiletPaper size='1rem' />
                  </ThemeIcon>
                }
              >
                Flush toilets
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color='yellow' size={24}>
                    <IconBath size='1rem' />
                  </ThemeIcon>
                }
              >
                Warm water showers
              </List.Item>
            </List>
          </div>
        </SimpleGrid>
      </Card>
    </Container>
  );
};
