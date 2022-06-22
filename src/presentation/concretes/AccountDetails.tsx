import { Grid, GridItem } from '@chakra-ui/react'

export interface AccountDetailsProps{
  username: string;
}

function AccountDetails(props: AccountDetailsProps) {
  return (
    <Grid gridTemplateRows="1fr 1fr" gridTemplateColumns="30vw 1fr" minWidth="98%" minHeight="100%" gap={1}>
      <GridItem rowSpan={2} border="solid" bg="gray.600">
        {props.username}
      </GridItem>
      <GridItem border="solid" bg="gray.600">
        {props.username}
      </GridItem>
      <GridItem border="solid" bg="gray.600">
        {props.username}
      </GridItem>
    </Grid>
  )
}

export default AccountDetails