import { useContext, useState } from 'react';
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem,
  Flex,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,
    borderBottom: 0,
  },

  inner: {
    height: rem(85),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.black,
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.darken(
        theme.fn.variant({ variant: 'filled', color: theme.white }).background!,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderProps {
  Logo: string;
  links?: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
  setPage(page: string): void;
}

export function HeaderMenu({ Logo, links = [], setPage }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    page: string
  ) => {
    console.log(page);
    event.preventDefault();
    setPage(page);
  };
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <a
        key={item.link}
        href={item.link}
        className={classes.link}
        onClick={(event) => handleLinkClick(event, item.link)}
      >
        {item.label}
      </a>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger='hover'
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => handleLinkClick(event, link.link)}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size='0.9rem' stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => handleLinkClick(event, link.link)}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={80} className={classes.header} mb={120}>
      <Container>
        <div className={classes.inner}>
          <Flex align='center'>
            <img src={Logo} alt={'Loading'} height={75} />
            <Title order={1}>Omborokko Safaris</Title>
          </Flex>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size='sm'
            color='#fff'
          />
        </div>
      </Container>
    </Header>
  );
}
