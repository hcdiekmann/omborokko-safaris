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

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
  const [opened] = useDisclosure(false);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const { classes } = useStyles();

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    page: string
  ) => {
    setDrawerOpened(false); // Close the mobile menu when a link is clicked
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

  const renderMobileMenuItems = () => {
    return links.map((link) => {
      if (link.links) {
        return (
          <Flex key={link.label} direction='column' columnGap={20}>
            {link.links.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className={classes.link}
                onClick={(event) => handleLinkClick(event, item.link)}
              >
                {item.label}
              </a>
            ))}
          </Flex>
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
  };

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
