import {
  createStyles,
  Group,
  ActionIcon,
  rem,
  Title,
  Flex,
} from '@mantine/core';
import {
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandInstagram,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(80),
    borderTop: `${rem(1)} solid ${theme.colors.gray[2]}`,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.sm,
      marginBottom: theme.spacing.md,
    },
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  },
  FacebookIcon: {
    '&:hover': {
      color: theme.colors.blue[6],
    },
  },
  WhatsappIcon: {
    '&:hover': {
      color: theme.colors.green[6],
    },
  },
  InstaIcon: {
    '&:hover': {
      color: theme.colors.orange[6],
    },
  },
}));

interface FooterCenteredProps {
  Logo: string;
  links: { link: string; label: string }[];
}

export function FooterCentered({ Logo, links }: FooterCenteredProps) {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link to={link.link} key={link.label} className={classes.links}>
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Flex align='center'>
          <img src={Logo} alt={'Loading'} height={45} width={35} />
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <Title order={3}>Omborokko Safaris</Title>
          </Link>
        </Flex>

        <Group className={classes.links}>{items}</Group>

        <Group spacing='xs' position='right' noWrap>
          <a
            href='https://www.facebook.com/omborokko/'
            target='_blank'
            rel='noreferrer'
          >
            <ActionIcon
              size='lg'
              variant='default'
              radius='xl'
              className={classes.FacebookIcon}
            >
              <IconBrandFacebook size='1.05rem' stroke={1.5} />
            </ActionIcon>
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=264817683446'
            target='_blank'
            rel='noreferrer'
          >
            <ActionIcon
              size='lg'
              variant='default'
              radius='xl'
              className={classes.WhatsappIcon}
            >
              <IconBrandWhatsapp size='1.05rem' stroke={1.5} />
            </ActionIcon>
          </a>
          <a
            href='https://www.instagram.com/omborokko/'
            target='_blank'
            rel='noreferrer'
          >
            <ActionIcon
              size='lg'
              variant='default'
              radius='xl'
              className={classes.InstaIcon}
            >
              <IconBrandInstagram size='1.05rem' stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </div>
    </div>
  );
}
