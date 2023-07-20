import { Title, Container, Card, Text } from '@mantine/core';

export const CampingPage = (): JSX.Element => {
  return (
    <Container mt={100}>
      <Card>
        <Title order={2}>Remote Camping</Title>
        <Text>
          For those who seek an immersive natural experience, our remote camping
          sites provide a unique chance to dwell in the midst of Namibia's
          untouched beauty. Nestled next to a seasonal river, and tucked away at
          the foot of the majestic Omborokko Mountains, our campsites offer a
          genuine encounter with the tranquil Namibian bush.
        </Text>
      </Card>
    </Container>
  );
};
