import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

function Navbar() {
  return (
   

    <Flex alignItems="center" minW="100%" padding="2">
      <Box userSelect="none">
        <Heading as='h4' size='lg'>
          Hackerhub
        </Heading>
      </Box>
      <Spacer />
      <Box fontSize="25">
        <a href="https://github.com/BenMob/hackerhub" target={"_blank"}>
          <FontAwesomeIcon cursor="pointer" icon={faGithub} />
        </a>
      </Box>
    </Flex>
  )
}

export default Navbar