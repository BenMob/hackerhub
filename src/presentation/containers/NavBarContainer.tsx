
import { Flex } from '@chakra-ui/react'
import Navbar, { NavBarPorps} from '../concretes/Navbar'

function NavBarContainer(props: NavBarPorps) {
  return (
    <Flex bg="gray.800" color="gray.100" alignItems='center'  p='2' borderBottom="solid 3px" borderBottomColor="red.400" >
      <Navbar appLogoClickHandler={() => props.appLogoClickHandler()} />
    </Flex>
  )
}

export default NavBarContainer