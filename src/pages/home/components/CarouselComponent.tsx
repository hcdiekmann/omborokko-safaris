import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
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
import { Link } from 'react-router-dom';

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

const data = [
  {
    image: '/pictures/webp/B&BOutsidePatioDrinksDarkend.webp',
    title: 'Relax and unwind at our Farmhouse patio',
    category: 'Bed & Breakfast',
  },
  {
    image: '/pictures/webp/CampFarViewDark.webp',
    title: 'Adventurous Camping amidst majestic Leadwood trees',
    category: 'Remote Camping',
  },
  {
    image: '/pictures/webp/Jackal.webp',
    title: 'Encounter Wildlife at our Waterhole observatory',
    category: 'Remote Camping',
  },
  {
    image: '/pictures/webp/B&BFamilyRoomBeds.webp',
    title: 'Indulge in luxurious tranquility at our Farm Retreat',
    category: 'Bed & Breakfast',
  },
];

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  const getPageLink = () => {
    let pageToNavigate = '';

    switch (category) {
      case 'Bed & Breakfast':
        pageToNavigate = '/b&b';
        break;
      case 'Remote Camping':
        pageToNavigate = '/camping';
        break;
      // Add more cases as needed
      default:
        pageToNavigate = '/';
    }

    return pageToNavigate;
  };

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
      <Link to={getPageLink()}>
        <Button variant='white' color='dark'>
          Explore
        </Button>
      </Link>
    </Paper>
  );
}

export const CarouselComponent = (): JSX.Element => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 10000 }));
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
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
};
