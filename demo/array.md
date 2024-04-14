array.map()
function to copy an array ussually returning values with some manipulation
array.reduce()
function to accumualte a value to an variable
forEach to manipulate that array only
filter to get filtered result smimilar to .map()

be cautious while using parseInt and 

const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);

1. sqaure of an array
const num=[1,2,3,4,5];
const result= num.map((x)=>x**2);

2.first letter capatilize in an string array
const name=["alice","bob","charlie","danielle"];
const result=name.map((x)=>{
    return x.replace(x.charAt(0).toUpper());
    //return  name[0]..toUpperCase()+name.slice(1);;
    //return  name.slice(0,1).toUpperCase()+name.slice(1);
});

3. array of strings , returning array enclosed in <p> tag

const pokemon=["Bulbasaur","Charmander","Squirtle"]
const elements=pokemon.map(mon=>{
    return  `<p>${mon}</p>`
})