import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

root.render(
    <Page />
)

function Page() {
    return (
        <div>
            <header>
                <img src="react-logo.png" width="40px" alt="React Logo" img/>
            </header>
            <main>
                <h1> Reasons I love React! </h1>
                <ol>
                    <li>Was first released in 2013</li>
                    <li>Has well over 200K stars on Github</li>
                    <li>Is maintained by meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ol>
            </main>
            <footer>
                <small>Wang development.</small>
            </footer>
        </div>
    )
}