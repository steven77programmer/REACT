1. What does the '.map()' array method do?
it return the element of array in the same index to another array, we can use it to manipulate the array's values while doing this.
returns a new array. whatever gets returned from the callback function provided is placed at the same index in the new array.

2. What do we usually use '.map()' for in React?
to convert array of raw dta into a array of jsx elements that can be displayed on the page.

3.Why is using '.map()' better than just creating the components manually by typing them out?
It is not feasible when large amount of data are there map() makes it lot easier
It make the code more "self-sustaining" - not requiring additional changes whenever the data changes.
