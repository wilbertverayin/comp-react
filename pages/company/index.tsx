import PageLayout from '../../components/PageLayout/PageLayout';
import React, { useState } from 'react';
import {
  Card,
  Grid,
  Input,
  Button,
  Stack,
} from '@mantine/core';
import axios from 'axios';

interface Props {
  onChange: () => {},
  value: string,
  // any props that come into the component
}

const WInput = (props: Props) => {
  return <input type="text" onChange={props.onChange} value={props.value} />
};

export default function Company() {
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [domain, setDomain] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [founded, setFounded] = useState('');
  const [followersCount, setFollowersCount] = useState('');
  const [employeesCount, setEmployeesCount] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [revenue, setRevenue] = useState('');

  const onChange = async () => {
    const response = await axios.get(`https://contactout_website.test/api/v1/search/companies?keyword=home&company=${company}&domainUrl=&location&industry&yearFoundedFrom&yearFoundedTo&companyType&SICCode`);
    const fetchedCompany = response?.data?.data[
      Math.floor(Math.random() * (response?.data?.data?.length ?? 0))
    ] ?? {};
    setCompany(fetchedCompany?.company);
    setDescription(fetchedCompany?.description);
    setWebsite(fetchedCompany?.website);
    setDomain(fetchedCompany?.domain);
    setLinkedin(fetchedCompany?.linkedin);
    setFacebook(fetchedCompany?.facebook);
    setTwitter(fetchedCompany?.twitter);
    setLocation(fetchedCompany?.location);
    setIndustry(fetchedCompany?.industry);
    setFounded(fetchedCompany?.founded);
    setFollowersCount(fetchedCompany?.followersCount);
    setEmployeesCount(fetchedCompany?.employeesCount);
    setLogoUrl(fetchedCompany?.logoUrl);
    setCompanyType(fetchedCompany?.companyType);
    setRevenue(fetchedCompany?.revenue);
  }

  return (
    <PageLayout>
      <Card shadow="sm" p="lg">
        <Stack>
          <Grid>
            <Grid.Col span={6}>
              <Stack>
                <Input placeholder="Company" value={company} onChange={onChange} />
                <Input placeholder="Description" value={description} />
                <Input placeholder="Website" value={website} />
                <Input placeholder="Domain" value={domain} />
                <Input placeholder="Linkedin" value={linkedin} />
                <Input placeholder="Facebook" value={facebook} />
                <Input placeholder="Twitter" value={twitter} />
                <Input placeholder="Location" value={location} />
              </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
              <Stack>
                <Input placeholder="Industry" value={industry} />
                <Input placeholder="Founded" value={founded} />
                <Input placeholder="Followers count" value={followersCount} />
                <Input placeholder="Employees count" value={employeesCount} />
                <Input placeholder="Logo URL" value={logoUrl} />
                <Input placeholder="Company Type" value={companyType} />
                <Input placeholder="Revenue" value={revenue} />
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