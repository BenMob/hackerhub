import colors from "./styles/language-colors.json"
import NavBarContainer from "./containers/NavBarContainer"
import FooterContainer from "./containers/FooterContainer"
import SearchBarContainer from "./containers/SearchBarContainer"
import AccountContainer from "./containers/AccountDetailsContainer"
import { Grid, GridItem } from "@chakra-ui/react"

/**
 * This is the root of the HackerHub App Component
 * @returns 
 */
function HackerHub(): JSX.Element{

    const langs = []
    for (const [key, value] of Object.entries(colors)) {
        langs.push({name: key, color: value})
    }
    
    return(
        <Grid minH="100vh" gridTemplateRows="60px auto 50px" color="gray.100">
            <NavBarContainer />
            <Grid gridTemplateRows="100px auto" bg="gray.800">
                <SearchBarContainer />
                <AccountContainer />
            </Grid>
            <FooterContainer />
        </Grid>
    )
}

export default HackerHub