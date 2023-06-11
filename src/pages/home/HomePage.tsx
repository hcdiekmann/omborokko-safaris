import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Text,
  Title,
} from '@mantine/core';

export const HomePage = (): JSX.Element => {
  return (
    <BackgroundImage src='/pictures/webp/home_bg.webp' radius='xs'>
      <Title order={2}>Home</Title>
    </BackgroundImage>
  );
};
