import { ChangeEvent, useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons'

export interface SearchBarPops{
  inputHandler: Function
}

function SearchBar(props: SearchBarPops) {

  const [input, setInput] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setInput(event.target.value);
  }

  const handleSubmit = () => {
    props.inputHandler(input);
  }

  const handleClear = () => {
    if(input !== ""){
      setInput("");
    }
  }

  return (
    <InputGroup w="">
      <Input onChange={(e) => handleChange(e)} value={input} pr="4.5rem" w="18rem" size="md" type="text" focusBorderColor='gray.100' errorBorderColor='red.500' placeholder="Enter Github Username" bg="gray.900" color="gray.100" />
      <InputRightElement w="3rem" pr="2em">
        <IconButton onClick={handleClear} colorScheme="" aria-label='Clear' icon={<CloseIcon />} h='1.75rem' size='sm' isRound={true} />
        <IconButton onClick={handleSubmit} colorScheme="red" aria-label='Search' icon={<SearchIcon />} h='1.75rem' size='sm'  isRound={true} />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar