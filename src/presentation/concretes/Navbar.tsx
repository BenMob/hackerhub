import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";

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
        <Link href="https://github.com/BenMob/hackerhub" data-testid="github-icon-link" isExternal>
          <FontAwesomeIcon cursor="pointer" icon={faGithub} data-testid="github-icon" />
        </Link>
      </Box>
    </Flex>
  )
}

export default Navbar