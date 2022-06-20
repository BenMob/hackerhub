import { Flex } from "@chakra-ui/react"
import AccountDetails from "../concretes/AccountDetails"
import About from "../concretes/About"


function AccountDetailsContainer() {
  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
     <About />
    </Flex>
  )
}

export default AccountDetailsContainer