import { Container } from '@mantine/core';
import { ContactForm } from './components/ContactForm';

export const ContactPage = (): JSX.Element => {
  return (
    <Container mt={100}>
      <ContactForm />
    </Container>
  );
};
