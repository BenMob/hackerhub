import About from "../concretes/About";
import { Flex } from "@chakra-ui/react";
import AccountDetails from "../concretes/AccountDetails";
import { AccountDetailsProps } from "../concretes/AccountDetails";


function AccountDetailsContainer(props: AccountDetailsProps) {
  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
     <AccountDetails username={props.username} />
    </Flex>
  )
}

export default AccountDetailsContainer