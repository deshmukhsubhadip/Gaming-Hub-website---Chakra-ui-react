import React from 'react';
import { 
  Drawer, 
  DrawerBody, 
  DrawerHeader, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  Button, 
  useDisclosure, 
  VStack,
  HStack
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button pos="fixed" top="4" left="4" colorScheme="green" p="0" w="10" h="10" borderRadius="full" onClick={onOpen} zIndex={'overlay'}>
        <BiMenuAltLeft size="20" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textTransform={"uppercase"}>Gaming Hub</DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to="/home">Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to="/games">Games Video</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to="/upload">Upload Video</Link>
              </Button>
            </VStack>

            <HStack position="absolute" bottom="10"  >
              <Button onClick={onClose} colorScheme="purple" variant="solid" margin={5} >
                <Link to="/login">Log in</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="outline" margin={5}>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
