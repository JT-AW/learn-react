import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <h1 className="header">Hello, React!</h1>
)


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/
// const rt = document.getElementById("root")

// const h1_elem = document.createElement("h1")
// h1_elem.textContent = "Hello, World!"
// h1_elem.className = "header"
// rt.appendChild(h1_elem)