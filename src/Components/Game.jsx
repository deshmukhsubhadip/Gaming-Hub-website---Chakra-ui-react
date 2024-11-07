import React, { useState } from 'react';
import { Heading, Stack, VStack, Text, Button } from "@chakra-ui/react";

const videosArr = [
  "https://www.w3schools.com/html/mov_bbb.mp4", 
  "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", 
  "https://media.w3.org/2010/05/bunny/trailer.mp4", 
  "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", 
  "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4", 
  "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4"
];

const Game = () => {
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={["column", "row"]} h="100vh">
      <VStack w="full">
        <video
          key={videoSrc}
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: "100%" }}
          onError={() => alert("Error loading video. Please try another one.")}
        />
        <VStack>
          <Heading textTransform="uppercase">Sample video of game</Heading>
          <Text>This is a sample video for testing and demo. Please check all videos and enjoy.</Text>
        </VStack>
      </VStack>
      <VStack width={["full", "xl"]} alignItems="stretch" p="8" spacing={8} overflow="auto">
        {videosArr.map((video, index) => (
          <Button
            key={index}
            variant="ghost"
            colorScheme="purple"
            onClick={() => setVideoSrc(video)}
          >
            Gaming Video-{index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Game;
