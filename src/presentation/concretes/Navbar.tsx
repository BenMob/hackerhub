import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex alignItems="center" minW="100%" padding="2">
      <Box userSelect="none">
        <Heading as='h4' size='lg' role="heading">
          Hackerhub
        </Heading>
      </Box>
      <Spacer />
      <Box fontSize="25">
        <a href="https://github.com/BenMob/hackerhub" target={"_blank"} data-testid="github-icon-link">
          <FontAwesomeIcon cursor="pointer" icon={faGithub} data-testid="github-icon" />
        </a>
      </Box>
    </Flex>
  )
}

export default Navbar