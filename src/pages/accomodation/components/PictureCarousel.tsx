import { Carousel } from '@mantine/carousel';
import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
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
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const [allLoaded, setAllLoaded] = useState(false);
  let loadCount = 0;

  const handleImageLoad = () => {
    loadCount += 1;
    if (loadCount === pictures.length) {
      setAllLoaded(true);
    }
  };

  const slides = pictures.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} onLoad={handleImageLoad} radius={5} />
    </Carousel.Slide>
  ));

  return (
    <div style={{ opacity: allLoaded ? 1 : 0, transition: 'opacity 1s ease' }}>
      <Carousel
        mt={18}
        maw='auto'
        mah='auto'
        withIndicators
        classNames={classes}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </div>
  );
};
