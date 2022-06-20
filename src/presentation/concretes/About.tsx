import { Text, Box, Flex, Link } from "@chakra-ui/react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <Flex h="100%" w="90%" justifyContent="center" flexWrap="wrap">
      <Flex flex={1} p="5" justifyContent="center" marginTop="10vh">
        <Box color="gray.500">
          <FontAwesomeIcon icon={faCode} fontSize="30vh"/>
        </Box>
      </Flex>
      <Flex flex={1} p="5" justifyContent="center" marginTop="15vh" marginBottom="30vh">
        <Box textAlign="center">
          <Text bg="gray.900" p="5" border="solid" borderColor="gray.500" fontSize="2.5vh" borderRadius={10}>
            Hackerhub is a tool that displays interesting insights about programming languages from any public github account in the form of an easy-to-read dashboard. 
            To achieve this, Hackerhub makes use of the <Link color="red.300" href="https://docs.github.com/en/rest/users" isExternal>Github Users API</Link> and
            the <Link color="red.300" href="https://uber.github.io/react-vis" isExternal>React-Vis Library</Link>, among other technologies.
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default About
