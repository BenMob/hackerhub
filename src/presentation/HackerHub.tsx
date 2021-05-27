import colors from "./styles/language-colors.json"

/**
 * This is the root of the HackerHub App Component
 * @returns 
 */
function HackerHub(): JSX.Element{
    const style = {
        borderRadius: '2px',
        padding: '2px',
        margin: '2px',
        width: '450px',
        height: '300px',
        backgroundColor: `${colors.TypeScript}`
    }


    return(
        <h1 style={style} >Welcome To HackerHub</h1>
    )
}

export default HackerHub