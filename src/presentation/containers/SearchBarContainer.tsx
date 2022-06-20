import { Flex } from "@chakra-ui/react"
import SearchBar from "../concretes/SearchBar"

function SearchBarContainer() {
  return (
    <Flex justifyContent="center" alignItems="center" bg="gray.800">
      <SearchBar />
    </Flex>
  )
}

export default SearchBarContainer