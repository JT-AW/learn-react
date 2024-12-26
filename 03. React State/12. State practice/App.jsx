import React from "react"

export default function App() {

    let [count, setCount] = React.useState(0)

    function handleMinusClick() {
        setCount((prevCount) => prevCount - 1)
    }

    function handlePlusClick() {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={handleMinusClick}>–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={handlePlusClick}>+</button>
            </div>
        </main>
    )
}
