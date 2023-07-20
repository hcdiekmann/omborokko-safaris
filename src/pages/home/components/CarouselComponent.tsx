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

interface CarouselComponentProps {
  setPage: (page: string) => void;
}

interface CardProps {
  image: string;
  title: string;
  category: string;
  setPage: (page: string) => void;
}

const data = [
  {
    image: '/pictures/webp/B&BFamilyRoomBeds.webp',
    title: 'Indulge in luxurious tranquility at our Farm Retreat',
    category: 'Bed & Breakfast',
  },
  {
    image: '/pictures/webp/Jackal.webp',
    title: 'Encounter Wildlife at our Waterhole observatory',
    category: 'Remote Camping',
  },
  {
    image: '/pictures/webp/CampFarViewDark.webp',
    title: 'Adventurous Camping amidst majestic Leadwood trees',
    category: 'Remote Camping',
  },
  {
    image: '/pictures/webp/B&BBar.webp',
    title: 'Relax and unwind at our Farmhouse patio',
    category: 'Bed & Breakfast',
  },
];

function Card({ image, title, category, setPage }: CardProps) {
  const { classes } = useStyles();

  const handleExploreClick = () => {
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
        pageToNavigate = '/home';
    }

    setPage(pageToNavigate);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
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
      <Button variant='white' color='dark' onClick={handleExploreClick}>
        Explore
      </Button>
    </Paper>
  );
}

export const CarouselComponent = ({
  setPage,
}: CarouselComponentProps): JSX.Element => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} setPage={setPage} />
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
