1. What is a React component?

Function that returns an isolated, renderable element that can be reused in many different places in a web page. Represented as a JS function.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

No Pascal case.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

Should use <Header /> instead.