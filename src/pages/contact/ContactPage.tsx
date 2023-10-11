import {
  Text,
  List,
  SimpleGrid,
  Title,
  createStyles,
  rem,
  Container,
  Button,
} from '@mantine/core';
import { ContactForm } from './components/ContactForm';
import { IconPhone, IconMapPin } from '@tabler/icons-react';
import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][8]} 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },
  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },
  list_subtext: {
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
  },
  list: {
    color: theme.white,
    fontSize: theme.fontSizes.xs,
    fontWeight: 400,
  },
}));

export const ContactPage = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <Container mt={20}>
      <SimpleGrid
        cols={2}
        spacing={30}
        breakpoints={[{ maxWidth: '48rem', cols: 1 }]}
      >
        <div>
          <Title order={2} size={40} className={classes.title}>
            Contact
          </Title>
          <Text className={classes.description} mt='sm' mb={30}>
            Send us an email or give us a call. We will get back to you as soon
            as possible.
          </Text>
          <List mt={15} spacing='lg' size='sm' center className={classes.list}>
            <List.Item icon={<IconPhone size='1.5rem' />}>
              Phone
              <Text className={classes.list_subtext}>+264 (0) 81 706 8051</Text>
            </List.Item>
            <List.Item icon={<IconMapPin size='1.5rem' />}>
              <Text className={classes.list_subtext}>
                Farm Omihe 127 <br /> Otjiwarongo
              </Text>
            </List.Item>
          </List>
          <Button
            mt={15}
            component='a'
            radius={18}
            leftIcon={<FcGoogle size='1.5rem' />}
            href='https://g.page/r/CX5GoEWHNEH8EBM/review '
          >
            Leave us a 5 <FaStar style={{ marginRight: '0.25rem' }} /> Review
          </Button>
        </div>
        <div className={classes.form}>
          <ContactForm />
        </div>
      </SimpleGrid>
    </Container>
  );
};
