import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Drawer,
  Container,
  rem,
  Flex,
  Title,
} from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottom: 0,
    // position: 'static',
  },

  inner: {
    height: rem(85),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  activeLink: {
    backgroundColor: theme.colors[theme.primaryColor][2],
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
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors[theme.primaryColor][2],
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
}

export function HeaderMenu({ Logo, links = [] }: HeaderProps) {
  const [opened] = useDisclosure(false);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const location = useLocation();
  const { classes } = useStyles();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link
        key={item.link}
        to={item.link}
        className={`${classes.link} ${
          isActiveLink(item.link) ? classes.activeLink : ''
        }`}
      >
        {item.label}
      </Link>
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
            <Link to={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size='0.9rem' stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.link}
        className={`${classes.link} ${
          isActiveLink(link.link) ? classes.activeLink : ''
        }`}
      >
        {link.label}
      </Link>
    );
  });

  const renderMobileMenuItems = () => {
    return links.map((link) => {
      if (link.links) {
        return (
          <Flex key={link.label} direction='column' columnGap={20}>
            {link.links.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className={`${classes.link} ${
                  isActiveLink(item.link) ? classes.activeLink : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </Flex>
        );
      }
      return (
        <Link
          key={link.label}
          to={link.link}
          className={`${classes.link} ${
            isActiveLink(link.link) ? classes.activeLink : ''
          }`}
        >
          {link.label}
        </Link>
      );
    });
  };

  return (
    <Header height={85} className={classes.header} mb={120}>
      <Container>
        <div className={classes.inner}>
          <Flex align='center'>
            <img src={Logo} alt={'Loading'} height={75} width={57} />
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              <Title order={1}>Omborokko Safaris</Title>
            </Link>
          </Flex>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={() => {
              setDrawerOpened(!drawerOpened);
            }}
            className={classes.burger}
            size='md'
            color='#000'
          />
          <Drawer
            position='right'
            opened={drawerOpened}
            onClose={() => setDrawerOpened(false)}
            size='xs'
          >
            {renderMobileMenuItems()}
          </Drawer>
        </div>
      </Container>
    </Header>
  );
}
