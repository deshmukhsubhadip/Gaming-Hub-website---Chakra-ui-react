import { Button, HStack, VStack, Input, Container } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW="container.xl" h="100vh" p={16}>
      <VStack color="purple.500" h="full" justifyContent="center" spacing={6}>
        <AiOutlineCloudUpload size="10vmax" />
        <form>
          <HStack>
            <Input
              required
              type="file"
              sx={{
                "&::file-selector-button": {
                  border: "none",
                  width: "calc(100% + 36px)",
                  height: "100%",
                  marginLeft: "-18px",
                  color: "purple",
                  backgroundColor: "white",
                  cursor: "pointer",
                },
              }}
            />
            <Button colorScheme="blue" textTransform="uppercase" type="submit">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
