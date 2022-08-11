import React from 'react'
import { Text, IconButton } from '@chakra-ui/react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Box} from '@chakra-ui/layout';

function Social() {

  const { colorMode } = useColorMode ();

  const {isNotSmallerScreen} = useMediaQuery ("(min-width:600px)");
  
  return (
    
    <Stack>
      <Box mt={isNotSmallerScreen ? "0" : 16} aling='flex-start' ml="2"></Box>
        <Text aling="flex-start" fontSize="25" fontWeight="semibold"> My Social Networks </Text>   
              
        <Box p="3" alignSelf="center">
          <IconButton size="lg" icon={<FaLinkedin/> } onClick={() => window.open("https://www.linkedin.com/in/ngabrielcordoba/")}>  </IconButton>
          <IconButton ml={2} size="lg" icon={<FaGithub></FaGithub>}onClick={() => window.open("https://github.com/ngcordoba")}> </IconButton>
          <IconButton ml={2} size="lg" icon={<FaInstagram></FaInstagram>}onClick={() => window.open("https://www.instagram.com/gabocordoba/")}> </IconButton>
        </Box>
  

  
  </Stack>

        
  )
}

export default Social