#quiz1

1. Why do we need to 'importd React from "react"' in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A Javascript object. React elements that describe what React should eventually add to the real DOM for us.

3. What's wrong with the code:
```
const page =(
    <h1>Hello</h1>
    <p>This my problem</p>
)

```
mulitple element cannot be interpreted by the JSX. We need our JSX to be nested under a single element

4. What does it mean for somehting to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do and expect it to handle the details. Imperative means I need to tell it HOW to do each step.


5. What does it mean for soemthing to be "composable"?
We have small pieces that we can put together to make somehting larger/greater than the individual pieces.

#quiz2

1. What is a React component?
A React component is a reusable piece of user interface built using react js. 
A function that return React elements.(UI)

2. What's wrong with this code?
```
function myComponent() {//do it in pascal case MyComponent
return (
    <small>I'm tiny text!</small>
)
}

```

3. What's wrong with this code?
```
function Header(){
    return (
        <header>
        <nav>
        <img src="./react-logo.png" width="40px" />
        </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"));//<Header />
```