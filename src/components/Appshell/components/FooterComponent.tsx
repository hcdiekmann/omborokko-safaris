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
          <Title order={3}>Omborokko Safaris</Title>
        </Flex>

        <Group className={classes.links}>{items}</Group>

        <Group spacing='xs' position='right' noWrap>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <IconBrandFacebook size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <IconBrandWhatsapp size='1.05rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <IconBrandInstagram size='1.05rem' stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
