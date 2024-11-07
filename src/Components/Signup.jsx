import React from 'react';
import { Heading, VStack, Input, Button, Container, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW="container.xl" h="100vh" p={16}>
      <form>
        <VStack align="stretch" spacing={8} w={["full", "96"]} m="auto" my={16}>
          <Heading textTransform="uppercase" textAlign="center">Gaming Hub</Heading>
          <Avatar alignSelf="center" boxSize={32} />
          <Input placeholder="Name" type="text" required focusBorderColor="purple.500" />
          <Input placeholder="Email" type="email" required focusBorderColor="purple.500" />
          <Input placeholder="Password" type="password" required focusBorderColor="purple.500" />
          
          <Button as={Link} to="/signup" colorScheme="purple" w="full" h="10" textColor="white">
            Sign Up
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
