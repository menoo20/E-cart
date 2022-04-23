import  { useState ,useEffect } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { NavContent } from './NavContent';
import { Users } from './Users';
import ProductsTabs from './products/ProductsTabs';


export default function AdminPanel() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [type, setType] = useState("products")


    const handleClick=(sss)=>{
        setType(sss)

    }


    useEffect(() => {
       
        return () => {
            
        }
    }, [type])



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
           <NavContent handleClick={handleClick}/>
          </Navbar>
        }
       /*  aside={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        } */
        footer={
          <Footer height={60} p="md">
            Application footer
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
  
              <Text>Application header</Text>
            </div>
          </Header>
        }
      >


          { type==="products"
            ? <ProductsTabs/>
             :type==="users"
              ?<Users/>
              :type==="orders"
              ?<Text>orders</Text>
              :<Text>unknown</Text>

          }


      </AppShell>
    );
  }
  