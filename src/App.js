import { Heading, VStack, Flex, Spacer, } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { useColorMode } from '@chakra-ui/color-mode'
import { IconButton } from '@chakra-ui/button'
import { FaSun, FaMoon } from 'react-icons/fa'
import Body from "./components/Body"

function App() {

  const {colorMode, toggleColorMode } = useColorMode ()
  const isDark = colorMode === "dark";

  return (
    // Header
    <VStack p="5">
      <Flex w="100%">
        <Heading
           ml="2" mt="3" size="md" fontWeight= 'semibold'  color="white.500"> ngcordoba </Heading>   
        <Spacer></Spacer>
        <IconButton 
        ml={2} 
        size="lg" 
        icon={isDark ? <FaMoon/> : <FaSun/>} 
        onClick={toggleColorMode}> 
        </IconButton>

      </Flex>
        <Body></Body>
    </VStack>
    
  );
}

export default App;
