import {
  Title,
  Container,
  Card,
  Text,
  List,
  ThemeIcon,
  SimpleGrid,
  Group,
  Alert,
  Button,
  createStyles,
} from '@mantine/core';
import { Balancer } from 'react-wrap-balancer';
import {
  IconAlertCircle,
  IconBath,
  IconBottle,
  IconCampfire,
  IconToiletPaper,
} from '@tabler/icons-react';
import { PictureCarousel } from '../components/PictureCarousel';
import { Link } from 'react-router-dom';

const pictures = [
  '/pictures/webp/CampFireplaceRiverView.webp',
  '/pictures/webp/CampFarView.webp',
  '/pictures/webp/CampFireplaceTree.webp',
  '/pictures/webp/CampAblution.webp',
  '/pictures/webp/CampFromRiver.webp',
];

const useStyles = createStyles((theme) => ({
  icons: {
    color: theme.primaryColor,
  },
}));

export const CampingPage = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <Container mt={20}>
      <Card p={15} pt={5} radius='md'>
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
                  <ThemeIcon className={classes.icons} size={24}>
                    <IconCampfire size='1rem' />
                  </ThemeIcon>
                }
              >
                Firepit with grill
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon className={classes.icons} size={24}>
                    <IconBottle size='1rem' />
                  </ThemeIcon>
                }
              >
                Fresh drinking water
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon className={classes.icons} size={24}>
                    <IconToiletPaper size='1rem' />
                  </ThemeIcon>
                }
              >
                Flush toilets
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon className={classes.icons} size={24}>
                    <IconBath size='1rem' />
                  </ThemeIcon>
                }
              >
                Warm water showers
              </List.Item>
            </List>
          </div>
        </SimpleGrid>

        <PictureCarousel pictures={pictures}></PictureCarousel>
        <Alert
          icon={<IconAlertCircle size='1rem' />}
          title='Important'
          className={classes.icons}
          mt={10}
        >
          <List mt={0} size='sm'>
            <List.Item>A 4x4 off-road vehicle is advised</List.Item>
            <List.Item>No electrical outlets available</List.Item>
          </List>
        </Alert>
        <Group mt={10} position='center'>
          <Link to='/rates'>
            <Button>View Rates</Button>
          </Link>
          <Link to='/contact'>
            <Button>Book Now</Button>
          </Link>
        </Group>
      </Card>
    </Container>
  );
};
