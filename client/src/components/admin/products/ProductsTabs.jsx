import { useState } from 'react';
import { Tabs , Text} from '@mantine/core';
import Form from './newProduct/Form';



export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Tabs grow position="center" active={activeTab} onTabChange={setActiveTab}>
      <Tabs.Tab label="View Products">View Products</Tabs.Tab>
      <Tabs.Tab label="Add New Products"><Form/></Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}