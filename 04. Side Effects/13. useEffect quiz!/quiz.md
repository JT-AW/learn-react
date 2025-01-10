1. In what way are React components meant to be "pure functions"

The same prop or state change, will always result in the same UI rendered. Also, there are no external calls to other systems.

2. What is a "side effect" in React? What are some examples?

Any code that affects or interacts with an outside system.
A side effect is a change to an external system that isn't directly returned by the component. Some examples are an API call, local storage, subscriptions, DOM manipulation or anything that react is not directly in charge of.

3. What is NOT a "side effect" in React? Examples?

A state change, keeping UI in sync with data, rendering DOM elements are not side effects. Anything that React is in charge of.

4. When does React run your useEffect function? When does it NOT run
   the effect function?
   
React only runs the use effect function when the dependency array values change from one render to the next and as soon as the component renders for the first time.

5. How would you explain what the "dependecies array" is?

The dependencies array is a list of variables or states that could potentially change from one rendering to the next that the effect function relies upon.