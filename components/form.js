import Link from 'next/link';
import {
  Button,
  Box,
  useColorModeValue,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Center,
} from '@chakra-ui/react';

const Form = ({ isLogin, errorMessage, onSubmit }) => (
  <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    // bg={useColorModeValue('gray.50', 'gray.800')}
  >
    <Box
      as="form"
      onSubmit={onSubmit}
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
    >
      <Stack spacing={8} mx={'auto'} minW={'md'} maxW={'md'} py={12} px={10}>
        <Stack spacing={4}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" name="username" required />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" required />
          </FormControl>
        {!isLogin && (
          <Stack>
            <FormControl id="rpassword">
            <FormLabel>Repeat password</FormLabel>
            <Input type="password" name="rpassword" required />
          </FormControl>
          </Stack>
        )}
        </Stack>

        <div className="submit">
          {isLogin ? (
            <>
              <Flex justify={'center'} mb={2}>
                <Link href="/signup">
                  <a>I don&apos;t have an account</a>
                </Link>
              </Flex>
              <Button
                minW={'100%'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit"
              >
                Login
              </Button>
            </>
          ) : (
            <>
              <Flex justify={'center'} mb={2}>
                <Link href="/login">
                  <a>I already have an account</a>
                </Link>
              </Flex>
              <Button
                minW={'100%'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit"
              >
                Signup
              </Button>
            </>
          )}
        </div>

        <Flex justify={"center"}>{errorMessage && <p className="error">{errorMessage}</p>}</Flex>

        <style jsx>
          {`
            .error {
              color: brown;
              margin: 1rem 0 0;
            }
          `}
        </style>
      </Stack>
    </Box>
  </Flex>
);

export default Form;
