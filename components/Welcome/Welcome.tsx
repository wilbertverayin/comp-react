import { Title, Text, Anchor, Space } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Mantine
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">

        <Anchor href="/person" size="lg">
          Submit a Person
        </Anchor>
        <Space></Space>
        <Anchor href="/company" size="lg">
          XSubmit a Company
        </Anchor>
        
      </Text>
    </>
  );
}
