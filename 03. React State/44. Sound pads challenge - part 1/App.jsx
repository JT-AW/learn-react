import React from "react"
import initialPads from "./pads"
import Pad from "./Pad"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    const [pads, setPads] = React.useState(initialPads)

    const padElements = pads.map((pad) => 
        <Pad key={pad.id} color={pad.color} />
        )

    return (
        <main>
            <div className="pad-container">
                {padElements}
            </div>
        </main>
    )
}
