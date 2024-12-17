export default function Joke({setup, punchline}) {
    return (
        <article className="joke">
            <div className="setup">
                <h1>{setup}</h1>
            </div>
            <div className="punchline"
                style={{display: punchline ? "block" : "none"}}>
                <h1>{punchline}</h1>
            </div>
        </article>
    )
}