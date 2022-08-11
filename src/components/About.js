import { Stack, Flex, Box, Text} from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';

function Body() {

  const { colorMode } = useColorMode ();
  const isDark = colorMode === "dark";

  const {isNotSmallerScreen} = useMediaQuery ("(min-width:600px)");
  
  return (
    <Stack>
      
      <Flex direction={isNotSmallerScreen ? "row" : "column"}>
          
          <Text fontSize="50" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">About me</Text>
            <Text mb="0" color={isDark ? "gray.200" : "gray.600"}>I'm Functional Analyst and Front End Developer and i'm currently learning ReactJS/Native, 
        developing projects to improve my skills</Text>
          
        
                  
      </Flex>

    
    </Stack>
  )
}

export default Body