import {Text} from "@chakra-ui/react"

function Footer() {
  return (
    <div>
      <Text fontSize='md'>
        Designed & Built by <span><a href={'https://benjaminombeni.com/'} target={"_blank"}>Benjamin Ombeni</a></span> ©{new Date().getUTCFullYear()}
      </Text>
    </div>
  )
}

export default Footer