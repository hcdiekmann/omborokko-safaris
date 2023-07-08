import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(400),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(28),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size='xs'>
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant='white' color='dark'>
        Explore
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: '/pictures/webp/B&BFamilyRoomBeds.webp',
    title: 'Indulge in luxurious tranquility at our Farm Retreat',
    category: 'Bed & Breakfast',
  },
  {
    image: '/pictures/webp/CampFireplaceTreeDarkend.jpg',
    title: 'Adventurous camping amidst majestic Leadwood trees',
    category: 'Camping',
  },
  {
    image: '/pictures/JPG/Jackal.jpg',
    title:
      'Experience an up-close encounter with wildlife at our Waterhole observatory',
    category: 'Activities',
  },
  {
    image: '/pictures/webp/B&BBar.webp',
    title: 'Relax and unwind at our Pool Deck',
    category: 'Swimming Pool',
  },
];

export const CarouselComponent = (): JSX.Element => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize='50%'
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 10 }]}
      slideGap='lg'
      align='start'
      loop
      withIndicators
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
};
