/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

  import { createRoot } from "react-dom/client"
  const root = createRoot(document.getElementById("root"))

  root.render(
    <main>
      <img src="react-logo.png" width="40" />
      <h1> Fun facts about React </h1>
      <ul>
        <li>React was first released in 2013.</li>
        <li>React is used by Facebook and Instagram.</li>
        <li>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.</li>
        <li>React is a view layer library, not a full-fledged framework.</li>
      </ul>
    </main>
  )
