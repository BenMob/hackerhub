import { Container, Flex, Grid, GridItem } from "@chakra-ui/react"


function AccountContainer() {
  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
      <Grid gridTemplateRows="1fr 1fr" gridTemplateColumns="30vw 1fr" minWidth="100%" minHeight="100%" gap={1}>
        <GridItem rowSpan={2} border="solid" bg="gray.600">
          Coming Soon ...
        </GridItem>
        <GridItem border="solid"  bg="gray.600">
          Coming Soon ...
        </GridItem>
        <GridItem border="solid" bg="gray.600">
          Coming Soon ...
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default AccountContainer