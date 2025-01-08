import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    let [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown((prevIsShown) => !prevIsShown)
    }
    
    console.log(isShown)
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>Toggle Punchline</button>
            <hr />
        </div>
    )
}