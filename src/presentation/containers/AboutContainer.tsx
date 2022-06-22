import About from "../concretes/About";
import { Flex } from "@chakra-ui/react";

function AboutContainer() {
  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
      <About />
    </Flex>
  )
}

export default AboutContainer