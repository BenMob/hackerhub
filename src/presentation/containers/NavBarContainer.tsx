
import { Flex } from '@chakra-ui/react'
import Navbar from '../concretes/Navbar'

function NavBarContainer() {
  return (
    <Flex bg="gray.800" color="gray.100" alignItems='center'  p='2' borderBottom="solid 3px" borderBottomColor="red.500" >
      <Navbar />
    </Flex>
  )
}

export default NavBarContainer