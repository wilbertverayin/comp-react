import React, { useState, ReactNode } from 'react';
import { BrandWindows, User, Users } from 'tabler-icons-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ActionIcon,
  Space,
  Anchor,
  Stack,
  UnstyledButton,
  Avatar,
  Group,
} from '@mantine/core';
interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function PageLayout({children}: Props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Navbar.Section grow>
          <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
            <Stack>
              <UnstyledButton onClick={() => window.open('/profile')}>
                <Group>
                  <Avatar size={40} color="blue"><User /></Avatar>
                  <div>
                    <Text>Person</Text>
                    <Text size="xs" color="gray">Form for a person</Text>
                  </div>
                </Group>
              </UnstyledButton>
              <Space />
              <UnstyledButton
                onClick={() => window.open('/company')}
              >
                <Group>
                  <Avatar size={40} color="blue"><Users /></Avatar>
                  <div>
                    <Text>Company</Text>
                    <Text size="xs" color="gray">Form for a company</Text>
                  </div>
                </Group>
              </UnstyledButton>
            </Stack>
          </Text>
          </Navbar.Section>
          <Navbar.Section>
            <ColorSchemeToggle />
          </Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          All rights reserved &copy; 2022
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <ActionIcon>
              <BrandWindows />
            </ActionIcon>
            <Text inherit variant="gradient" component="span">
              Wilbit
            </Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}