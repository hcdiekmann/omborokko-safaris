import { Carousel } from '@mantine/carousel';
import { Image, createStyles, getStylesRef, rem } from '@mantine/core';

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef('controls'),
    transition: 'opacity 300ms ease',
    opacity: 0,
  },
  indicator: {
    width: rem(12),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(40),
    },
  },

  root: {
    '&:hover': {
      [`& .${getStylesRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));

interface PictureCarouselProps {
  pictures: string[];
}

export const PictureCarousel = ({
  pictures,
}: PictureCarouselProps): JSX.Element => {
  const { classes } = useStyles();
  const slides = pictures.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel mt={10} maw='auto' mah='auto' withIndicators classNames={classes}>
      {slides}
    </Carousel>
  );
};
