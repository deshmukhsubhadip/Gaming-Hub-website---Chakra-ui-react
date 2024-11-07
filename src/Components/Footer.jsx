import React from 'react';
import { Box, Button, Heading, Stack, VStack, HStack, Input, Text } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box bg="blackAlpha.900" minH="40" p="16" color="white">
            <Stack direction={["column", "row"]} spacing="8" align="center">
                <VStack alignItems="stretch" w="full" px={4}>
                    <Heading size="md" textTransform="uppercase" textAlign="left">
                        Subscribe to get updates
                    </Heading>
                    <HStack>
                        <Input
                            color="white"
                            placeholder="Add Email Here..."
                            border="1px solid white"
                            borderRadius="20px 0 0 20px"
                            _placeholder={{ color: "whiteAlpha.600" }}
                        />
                        <Button
                            p="0"
                            variant="ghost"
                            colorScheme="purple"
                            borderRadius="0 20px 20px 0"
                            color="whiteAlpha.900"
                        >
                            <AiOutlineSend size="20" />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w="full" borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white"]}>
                    <Heading textTransform="uppercase" textAlign="center">
                        Gaming Hub
                    </Heading>
                    <Text>All rights reserved</Text>
                </VStack>

                <VStack w="full">
                    <Heading size="md" textTransform="uppercase">
                        Social media
                    </Heading>
                    <Button as={Link} to="https://www.youtube.com/" variant="link" colorScheme="yellow" target="_blank">
                        Youtube
                    </Button>
                    <Button as={Link} to="https://www.google.com/" variant="link" colorScheme="yellow" target="_blank">
                        Google
                    </Button>
                    <Button as={Link} to="https://www.facebook.com/" variant="link" colorScheme="yellow" target="_blank">
                        Facebook
                    </Button>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;
