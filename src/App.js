import { Heading, VStack, Flex, Spacer } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'
import { IconButton } from '@chakra-ui/button'
import { FaSun, FaMoon } from 'react-icons/fa'
import Header from "./components/Header"
import Social from "./components/Social"
import Profile from "./components/Profile"

function App() {

  const {colorMode, toggleColorMode } = useColorMode ()
  const isDark = colorMode === "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading
           ml="8" mt="3" size="md" fontWeight= 'semibold'  color="white.500"> ngcordoba </Heading>   
        <Spacer></Spacer>
        <IconButton ml={2} size="lg" icon={isDark ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode}></IconButton>
      </Flex>

        <Header></Header>
        <Social></Social>
        <Profile></Profile>
      
    </VStack>
    
  );
}

export default App;
