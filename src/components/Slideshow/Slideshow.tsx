import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export const Slideshow = (): JSX.Element => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <Carousel
      maw={750}
      mx='auto'
      withIndicators
      height={500}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: rem(40),
          },
        },
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
    >
      <Carousel.Slide>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src='/pictures/webp/Campsite 1__9_11zon.webp'
          alt='Slide 1'
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src='/pictures/webp/B&B Outside patio with view_6_11zon.webp'
          alt='Slide 2'
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src='/pictures/webp/B&B Family Unit Outside patio_3_11zon.webp'
          alt='Slide 3'
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src='/pictures/webp/B&B Family unit Room 1_4_11zon.webp'
          alt='Slide 4'
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src='/pictures/webp/B&B Outside patio with view_6_11zon.webp'
          alt='Slide 5'
        />
      </Carousel.Slide>
    </Carousel>
  );
};
