1. What do props help us accomplish?

Helps us pass in custom data for a template component.

2. How do you pass a prop into a component?

Through defining a property in your custom component initialization and then calling 'arg.<prop_name>' in your custom component.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
No, there are predfined

4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            props.prop
        </header>
    )
}


5. What data type is `props` when the component receives it?

JS object!