import { Stack, Flex, HStack, Text} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';

function Body() {

  const { colorMode } = useColorMode ();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery ("(min-width:640px)");
  
  return (
    <Stack spacing={2} >
      <HStack >
            <Text 
            fontSize="50" 
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" 
            bgClip="text">
            About me
            </Text>
      </HStack>

      
      
      <Flex direction={isNotSmallerScreen ? "column" : "row"}
>
          <Stack justifyContent= "space-between">
            <Text 
            ml="0"
            mb="0" 
            color={isDark ? "gray.200" : "gray.600"}>
              I'm Functional Analyst and Front End Developer and i'm currently 
              learning ReactJS/Native, developing projects to improve my 
              skills</Text>
          <Image 
              borderRadius='full'
              alignSelf="center"
              flex="3"
              backgroundColor="transparent" 
              boxShadow="lg"
              boxSize="300px" 
              src='https://avatars.githubusercontent.com/u/70921504?v=4' 
              alt="Profile image"/>
            </Stack>
        </Flex>

    </Stack>
  )
}

export default Body