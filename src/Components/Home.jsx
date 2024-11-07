import React from 'react';
import { Carousel } from "react-responsive-carousel";
import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../Assets/image1.webp";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jfif";
import image5 from "../Assets/image5.jfif";
import image6 from "../Assets/image6.jpg";

const headingOptions = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    padding: "4",
    fontSize: "2xl"
};

const MyCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
            <Box width="full" height="100vh" position="relative">
                <Image src={image1} alt="Notebook" />
                <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
                    ADVANCE LVL GAMING EXPERIENCE
                </Heading>
            </Box>
            <Box width="full" height="100vh" position="relative">
                <Image src={image2} alt="Notebook" />
                <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
                    SEE REAL TIME GRAPHICS
                </Heading>
            </Box>
            <Box width="full" height="100vh" position="relative">
                <Image src={image3} alt="Notebook" />
                <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
                    PLAY CLASH OF CLANS
                </Heading>
            </Box>
            <Box width="full" height="100vh" position="relative">
                <Image src={image4} alt="Notebook" />
                <Heading bgColor="whiteAlpha.800" color="black" {...headingOptions}>
                    THE BEST FOOTBALL GAMING
                </Heading>
            </Box>
            <Box width="full" height="100vh" position="relative">
                <Image src={image5} alt="Notebook" />
                <Heading bgColor="whiteAlpha.800" color="black" {...headingOptions}>
                    THE BEST CRICKET GAMING
                </Heading>
            </Box>
        </Carousel>
    );
};

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxWidth="container.xl" p="16" bgColor={"yellow.300"}>
                <Heading
                    textTransform="uppercase"
                    py="2"
                    borderBottom="2px solid"
                    width="fit-content"
                    m="auto"
                    mb="8"
                >
                    Services
                </Heading>
                <Stack
                    h="full"
                    p="4"
                    alignItems="center"
                    direction={["column", "row"]}
                >
                    <Image
                        src={image6}
                        alt="Gaming Hub"
                        filter={"hue-rotate(-130deg)"}
                        h={["40", "400"]}
                        borderRadius="full"
                    />
                    <Text letterSpacing="widest" lineHeight="190%" p={["4", "16"]} textAlign="center" color="blackAlpha.800" fontWeight="bold">
                        GAMING HUB AUTOMATICALLY SHOWCASES YOUR MOBILE GAME DOWNLOADS, KEEPING ALL YOUR GAMES TOGETHER AND ORGANIZED IN ONE PLACE. GAMING HUB ALSO PROVIDES DATA SUCH AS USER GAMEPLAY TIME, INSTALLED/DELETED GAME HISTORY, GAME NOTIFICATIONS, AND GALAXY GAMERS TO ENSURE YOU ALWAYS STAY UPDATED IN THE GAMING WORLD.

                        THE APP ALLOWS YOU TO CONFIGURE OPTIONS BEFORE PLAYING TO ENHANCE YOUR GAMING EXPERIENCE. FOR EXAMPLE, YOU CAN ACTIVATE SILENT MODE OR ADJUST GAME PERFORMANCE.

                        ONE OF THE MOST INTERESTING FEATURES OF GAMING HUB IS "INSTANT PLAYS." INSTANT PLAYS OFFERS A VARIETY OF GAMES FROM DIFFERENT GENRES – FROM CLASSIC CARD GAMES TO MULTI-PLAYER SHOOTERS – ALL LAUNCHABLE WITH A SINGLE CLICK, NO INSTALLATION REQUIRED.

                        TO ENJOY INSTANT PLAYS, SIMPLY ACCESS THE GAMING HUB APP HOME, WHERE YOU'LL FIND A DIVERSE COLLECTION OF INSTANT PLAY GAMES.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Home;
