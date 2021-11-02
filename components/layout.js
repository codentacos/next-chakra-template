import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';
import { Box, Container } from '@chakra-ui/react';

const Layout = (props) => (
  <>
    <Box>
      <Navigation />
      <main>
        <Container maxW="container.lg" className="container">
          {props.children}
        </Container>
      </main>
    </Box>
  </>
);

export default Layout;
