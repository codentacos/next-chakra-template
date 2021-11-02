import { ReactNode } from 'react';
import Link from 'next/link';
import { useUser } from '../../lib/hooks';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const AuthLinks = [['Home', '/'], ['About', '#'], ['Contact Us', '#']];
const NoAuthLinks = [['Home', '/'], ['About', '#'], ['Contact Us', '#'], ['Log In', '/login']]

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children[1]}>
    {children[0]}
  </Link>
);

export default function Navigation() {
  const user = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    
      <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Next Chakra</Box>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                {user && (
                  AuthLinks.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))
                )}
              {!user && (
                  NoAuthLinks.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))
                )}
            </HStack>
            {user && (
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                m={4}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Investments</MenuItem>
                <Link href="#" passHref><MenuItem>Account</MenuItem></Link>
                <MenuDivider />
                <a href='api/auth/logout'><MenuItem>Logout</MenuItem></a>
              </MenuList>
            </Menu>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
    </>
  );
}