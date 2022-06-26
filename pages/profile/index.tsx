import React, { useState } from 'react';

import {
  Card,
  Grid,
  Input,
  Button,
  Stack,
} from '@mantine/core';
import PageLayout from '../../components/PageLayout/PageLayout';

export default function AppShellDemo() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  return (
    <PageLayout>
      <Card shadow="sm" p="lg">
        <Stack>
          <Grid>
            <Grid.Col span={12}>
              <Stack>
                <Input placeholder="email" value={email}/>
                <Input placeholder="company" value={company}/>
                <Input placeholder="firstName" value={firstName} />
                <Input placeholder="lastName" value={lastName} />
              </Stack>
            </Grid.Col>
          </Grid>
          <Button>
            Submit
          </Button>
        </Stack>
      </Card>
    </PageLayout>
  );
}