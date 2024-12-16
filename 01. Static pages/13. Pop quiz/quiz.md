1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

They insert it into the specified by the id of root, as if it were listed in html natively.

1. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```

A JS object that is structured like as if you were returning from a createElement call.

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

Only one child element is allowed, so it must be wrapped in some other tag.

4. What does it mean for something to be "declarative" instead of "imperative"?

Declarative is a way of describing the end goal while imperative is describing all the steps to get there.

5. What does it mean for something to be "composable"?

We have access to many lego pieces that are inherently simple but can be used to put together very complex and intricate constructions.