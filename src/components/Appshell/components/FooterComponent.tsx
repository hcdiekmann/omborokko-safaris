import {
  createStyles,
  Anchor,
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

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
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
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
    },
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
  setPage: (page: string) => void;
}

export function FooterCentered({ Logo, links, setPage }: FooterCenteredProps) {
  const { classes } = useStyles();

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    page: string
  ) => {
    event.preventDefault();
    setPage(page);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const handleTitleClick = () => {
    setPage('/home');
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const items = links.map((link) => (
    <Anchor<'a'>
      color='dimmed'
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => handleLinkClick(event, link.link)}
      size='sm'
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Flex align='center'>
          <img src={Logo} alt={'Loading'} height={45} />
          <Title order={3} onClick={handleTitleClick}>
            Omborokko Safaris
          </Title>
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
