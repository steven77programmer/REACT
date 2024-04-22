1. How would u describe the concept of state?
It is refers to values that are managed by components like the local variables inside the functions.
A way for React to remember saved values from within a component. This is similar to declaring varibles from within a component, with a few added bonuses.

2. When would u want to use props instead of state?
when u want to just display the raw data present , that is no updation of value involved.
Anytime you want pass data into a componetn so that component can determine what will get displayed on the screen.

3. When would you want to use state instead of props?
when we want an interaction wiht user and immediate response in the page
anytime you want a component to maintain a value from within the component and remember those value.

4. What does "immutable" mean? Are props immutable? Is state immutable?
immutbale means the variables whose value can be modified like the const variable.
props are immutable while state is mutable.
by changing props it defines the purpose. it may show warning.

---2---

1. You have 2 options for what you can pass into a state setter function(e.g 'setCount'). What are they?
the new state itself or else a callback function


2. When would you want to pass the first option (from answer above) to the state setter function?
call back function, whenever you do need the previous value to determine the new value

3.When would you want to pass the second option (from answer above) to the state setter function?
if the new state is not related to the previous state