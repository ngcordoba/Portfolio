import { IconButton } from '@chakra-ui/button'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';

function Body() {

  const { colorMode } = useColorMode ();
  const isDark = colorMode === "dark";

  const {isNotSmallerScreen} = useMediaQuery ("(min-width:600px)");
  
  return (
    <Stack>
      <Circle position="absolute" bg="blue.200" opacity="0.1"
          w="300px" h="300px" alignSelf="flex-end"/>
          
      <Flex direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start">
          <Box mt={isNotSmallerScreen ? "0" : 16} aling='flex-start'>
            <Text fontSize="30" fontWeight="semibold">Hi, I am</Text>
            <Text fontSize="50" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Gabriel Cordoba</Text>
            <Text mb="5" color={isDark ? "gray.200" : "gray.600"}>I'm Functional Analyst and Front End Developer and i'm currently learning ReactJS/Native, 
        developing projects to improve my skills</Text>

        <IconButton size="lg" icon={<FaLinkedin/> } onClick={() => window.open("https://www.linkedin.com/in/ngabrielcordoba/")}> Github </IconButton>
        <IconButton ml={2} size="lg" icon={<FaGithub></FaGithub>}onClick={() => window.open("https://github.com/ngcordoba")}></IconButton>
        <IconButton ml={2} size="lg" icon={<FaInstagram></FaInstagram>}onClick={() => window.open("https://www.instagram.com/gabocordoba/")}></IconButton>
        
        
          </Box> 
          
          <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                  mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                  backgroundColor="transparent" boxShadow="lg"
                  boxSize="300px" src='https://avatars.githubusercontent.com/u/70921504?v=4' />
              
      </Flex>

    
    </Stack>
  )
}

export default Body