import Header from "./components/Header"
import Entry from "./components/Entry"
import travelData from "./data.js"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {

    const travelJSX = travelData.map((location) => 
        <Entry
            key={location.id}
            {...entry}
        />
    )

    return (
        <>
            <Header />
            <main className="container">
                {travelJSX}
            </main>
        </>
    )
}