import React, { useEffect } from 'react';
import { useUser } from '../lib/hooks';
import { Container } from '@chakra-ui/react';

const Home = (props) => {
  const user = useUser();

  useEffect(() => {
    if (user !== undefined && user !== null) {
      console.log(user.id);
    }
  }, [user]);

  return (
    <>
      <Container mt={12}>
        <img
          src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true"
          alt="chakra logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png"
          alt="next logo"
        />
      </Container>
      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      <style jsx>
        {`
          li {
            margin-bottom: 0.5rem;
          }
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        `}
      </style>
    </>
  );
};

export default Home;
