import { Heading, VStack, Input, Button, Container, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
  return (
    <Container maxW="container.xl" h="100vh" p={16}>
      <form>
        <VStack alignItems="stretch" spacing={8} w={["full","96"]} m="auto" my={16}>
          <Heading>Welcome Back</Heading>
          <Input placeholder="Email" type="email" required focusBorderColor="purple.500" />
          <Input placeholder="Password" type="password" required focusBorderColor="purple.500" />
          <Button variant="link" alignSelf="flex-end">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Login
          </Button>
          <Text textAlign="right">New User?</Text>
          <Button as={Link} to="/signup" variant="link" colorScheme="purple" backgroundColor={"blue.500"} height={"40px"}>
            Sign Up
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
