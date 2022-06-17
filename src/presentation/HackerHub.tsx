import colors from "./styles/language-colors.json"

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
        <div>
            {langs.map(lang => {
                return <div style={{background: lang.color, padding: 10}}>{lang.name}</div>
            })}
        </div>
    )
}

export default HackerHub