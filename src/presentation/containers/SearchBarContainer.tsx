import { Flex } from "@chakra-ui/react"
import SearchBar, {SearchBarPops} from "../concretes/SearchBar"

function SearchBarContainer(props: SearchBarPops) {
  return (
    <Flex justifyContent="center" alignItems="center" bg="gray.800">
      <SearchBar inputHandler={props.inputHandler} />
    </Flex>
  )
}

export default SearchBarContainer