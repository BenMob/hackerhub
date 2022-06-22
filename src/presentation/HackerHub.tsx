import colors from "./styles/language-colors.json";
import { useState } from "react";
import NavBarContainer from "./containers/NavBarContainer";
import FooterContainer from "./containers/FooterContainer";
import SearchBarContainer from "./containers/SearchBarContainer";
import AccountDetailsContainer from "./containers/AccountDetailsContainer";
import AboutContainer from "./containers/AboutContainer";
import { Grid } from "@chakra-ui/react";


/**
 * This is the root of the HackerHub App Component
 * @returns 
 */
function HackerHub(): JSX.Element{

    const [username, setUsername] = useState<string>("");
    const handleChangeUserName = (username: string) => {
        if(username != "") setUsername(username);
    }

    const renderAccountDetailsContainer = () =>{
        return <AccountDetailsContainer username={username} /> 
    }

    const renderAboutContainer = () => {
        return <AboutContainer />
    }
    
    return(
        <Grid minH="100vh" gridTemplateRows="60px auto 50px" color="gray.100">
            <NavBarContainer appLogoClickHandler={() => setUsername("")} />
            <Grid gridTemplateRows="100px auto" bg="gray.800">
                <SearchBarContainer inputHandler={handleChangeUserName} />
                {username === "" && renderAboutContainer()}
                {username != "" && renderAccountDetailsContainer()}
            </Grid>
            <FooterContainer />
        </Grid>
    )
}

export default HackerHub