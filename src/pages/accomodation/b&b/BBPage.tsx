import {
  Title,
  Container,
  Card,
  Text,
  List,
  SimpleGrid,
  ThemeIcon,
  Button,
  Group,
  createStyles,
} from '@mantine/core';
import {
  IconSwimming,
  IconFridge,
  IconGrill,
  IconBath,
  IconWifi,
  IconCalendar,
  IconFileDollar,
} from '@tabler/icons-react';
import Balancer from 'react-wrap-balancer';
import { PictureCarousel } from '../components/PictureCarousel';
import { Link } from 'react-router-dom';

const pictures = [
  '/pictures/webp/B&BFamilyRoomBeds.webp',
  '/pictures/webp/B&BFamilyUnitOutside.webp',
  '/pictures/webp/B&BFamilyRoomSingleBed.webp',
  '/pictures/webp/B&BOutsidePatioDrinks.webp',
  '/pictures/webp/B&BEn-suite.webp',
  '/pictures/webp/B&BBar.webp',
];

const useStyles = createStyles((theme) => ({
  icons: {
    color: theme.primaryColor,
  },
}));

export const BBPage = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <Container mt={20}>
      <Card p={15} pt={5} radius='md'>
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
                your doorstep. The swimming pool provides the necessary
                refreshment to cool off during Namibia's hot summer days. An
                outdoor undercover patio can be used to relax and read a book
                while enjoying the astonishing view of the Omborokko mountains.
              </Balancer>
            </Text>
          </div>
          <div>
            <Text fw={700}>Amenities</Text>
            <List fw={500} mt={5} spacing='xs' size='sm' center>
              <List.Item
                icon={
                  <ThemeIcon className={classes.icons} size={24}>
                    <IconWifi size='1rem' />
                  </ThemeIcon>
                }
              >
                Wireless Internet
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon className={classes.icons} size={24}>
                    <IconFridge size='1rem' />
                  </ThemeIcon>
                }
              >
                Fridge
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon className={classes.icons} size={24}>
                    <IconBath size='1rem' />
                  </ThemeIcon>
                }
              >
                Fully equipped bathroom
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon className={classes.icons} size={24}>
                    <IconSwimming size='1rem' />
                  </ThemeIcon>
                }
              >
                Swimming pool
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon className={classes.icons} size={24}>
                    <IconGrill size='1rem' />
                  </ThemeIcon>
                }
              >
                Fireplace with grill
              </List.Item>
            </List>
          </div>
        </SimpleGrid>
        <PictureCarousel pictures={pictures}></PictureCarousel>
        <Group mt={10} position='center'>
          <Link to='/rates'>
            <Button leftIcon={<IconFileDollar />}>View Rates</Button>
          </Link>
          <Link to='/contact'>
            <Button leftIcon={<IconCalendar />}>Book Now</Button>
          </Link>
        </Group>
      </Card>
    </Container>
  );
};
