import {Link, Text} from "@chakra-ui/react"

function Footer() {
  return (
    <div>
      <Text fontSize='md'>
        Designed & Built by <Link href={'https://benjaminombeni.com/'} isExternal>Benjamin Ombeni</Link> ©{new Date().getUTCFullYear()}
      </Text>
    </div>
  )
}

export default Footer