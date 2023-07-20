import { Title, Container, Card, Text } from '@mantine/core';

export const BBPage = (): JSX.Element => {
  return (
    <Container mt={100}>
      <Card>
        <Title order={2}>Bed & Breakfast</Title>
        <Text>
          Relish in comfort while still being a heartbeat away from the
          wilderness, witnessing the serene Namibian sunsets right from your
          doorstep. An outdoor undercover patio can be used to relax and read a
          book while enjoying the astonishing view of the Omborokko mountains.
          Breakfast will also be served outside on the patio.
        </Text>
      </Card>
    </Container>
  );
};
