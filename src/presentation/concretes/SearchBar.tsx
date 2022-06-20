import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function SearchBar() {
  return (
    <InputGroup w="">
      <Input 
      pr="4.5rem" 
      type="text" 
      focusBorderColor='gray.100'
      errorBorderColor='red.500'
      placeholder="Enter Github Username" 
      bg="gray.600" 
      color="gray.100" />
      <InputRightElement width="3rem">
        <IconButton
        colorScheme="red"
        aria-label='Search' 
        icon={<SearchIcon />} 
        h='1.75rem' 
        size='sm' 
        isRound={true}/>
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar