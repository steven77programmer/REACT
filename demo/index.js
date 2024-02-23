    
    /*  
    //creating react component
        function MainContent(){
            return(<h1>I'm learning React</h1>);
        }
        
        function Navbar() {
          return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          );
        }
        
      
        
    
// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
// ReactDOM.render(<p>franky</p>, document.getElementById("poot"));
// ReactDOM.render( <ul><li>react1</li><li>react2</li></ul>, document.querySelector("#root"));
// //ReactDOM.render( <li>react2</li>, document.querySelector(".uloot"));

ReactDOM.render(
    <div>
        <Navbar/>
<MainContent />
    </div>,
    document.querySelector("#root")
);
*/

//vanila js challenge
//not suitable for creating muti element pages
// let root = document.querySelector("#root");
// let h1=document.createElement("h1");
// h1.classList.add("header");
// h1.innerText="Hello, React!";
// root.appendChild(h1);

//react js
// function test()
// {
// const h11=document.createElement("h1");
// h11.textContent="Hello, React!";
// h11.className="header";
// //document.querySelector("#root").appendChild(h11);
// console.log(h11);


//JSX
// const element = <h1 className="header">This is JSX</h1>
// console.log(element);
/*
{
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {
      "className": "header",
      "children": "This is JSX"
  },
  "_owner": null
}
returns single children
*/
//ReactDOM.render(element, document.getElementById("root"))
// }

//JSX example
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// )
// ReactDOM.render(
//   page,
//   document.querySelector("#root")
// )

//navbar JSX challenge
// import React from 'react';
// import ReactDOM from 'react-dom';

// const navbar = (
//   <nav>
//     <h1>DEMO website</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//     </nav>
// )
// ReactDOM.render(navbar, document.querySelector("#root"));

/*
//JSX challenge 2


// const page=(
//   <div>
//     <h1>Page 2</h1>
//     <h3>subtitle of page 2</h3>
//     <p>Description of page two</p>
//     <ul>
//      <li>Pricing</li>
//        <li>About</li>
// </ul>
//   </div>
  
// )

//document.querySelector("#root").append(JSON.stringify(page));//return js object so by strigify converts to json string
//ReactDOM.render(page, document.querySelector("#root"));
*/


/*
//challege info site

const page=(
  <div>
    <img src="../demo-app/public/logo192.png" width="40px"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K start on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps,including mobile apps</li>
    </ul>
  </div>
)
ReactDOM.render(page,document.querySelector("#root"));
*/

//creating function and returning elements
/*
function TemporaryName(){
  return (
    <div>
    <img src="../demo-app/public/logo192.png" width="40px"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K start on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps,including mobile apps</li>
    </ul>
  </div>
  )
}
ReactDOM.render(<TemporaryName />,document.querySelector("#root"));
*/
/*
//challenge
function OrderedList(){
  return(
    <div>
      <ol>
        <li>popular</li>
        <li>easy to learn</li>
        <li>used in companies</li>
      </ol>
    </div>
  )
}
ReactDOM.render(<OrderedList/>,document.querySelector("#root"));
*/

/*
//challenge 2
function Page(){
// function Header(){
  return(
    <div>
    <header>
    
      <nav>
     <img src="../demo-app/public/logo192.png" width="40px"></img>
    <h1>DEMO website</h1>
    <p>hii this is some fun with react</p>
    <ol>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ol>
    </nav>
    </header>

    <footer>
      <small>@ 2024 Thomas development. All rights reserved.</small>
    </footer>
    </div>
  )
// }
}
//ReactDOM.render(<Header/>, document.querySelector('#root'));
// ReactDOM.render(<Nav/>, document.querySelector('#root'));
// ReactDOM.render(<Footer/>, document.querySelector('#root'));
ReactDOM.render(<Page/>, document.querySelector('#root'));
*/


/*
//mini challenge
//+ nav ul content
function Header(){
  return(  
  <header className="header"> 
      
  <nav>
 <img src="../demo-app/public/logo192.png" className="imglogo"/>
 <ul className="containerul roboto-bold">
<li>Pricing</li>
<li>About</li>
<li>Contact</li>

 </ul>
 </nav>
 </header>
  )
}
function Main(){
  return(
    <div>
<h1>DEMO website</h1>
      <p>hii this is some fun with react</p>
      <ol>
        <li>popular react</li>
        <li>declaritive react</li>
        <li>open source and latest react</li>
      </ol>
      </div>
  )
}
function Footer(){
  return(
  <footer className="footer">
  <small>@ 2024 Thomas development. All rights reserved.</small>
</footer>
  )
}
function Page(){
  // function Header(){
    return(
      <div>
     <Header/>
      <Main/>
      <Footer/>
      
     
  
    
      </div>
    )
  // }
  }
  //ReactDOM.render(<Header/>, document.querySelector('#root'));
  // ReactDOM.render(<Nav/>, document.querySelector('#root'));
  // ReactDOM.render(<Footer/>, document.querySelector('#root'));
 ReactDOM.render(<Page/>, document.querySelector('#root'));
*/
//standardazing
//import React from "react";
// import ReactDOM from 'react-dom';
//import Header from "./Header.js";
//leftover header
// const Header = require('./Header.js');
function Main(){
  return(
    <div>
<h1>DEMO website</h1>
      <p>hii this is some fun with react</p>
      <ol>
        <li>popular react</li>
        <li>declaritive react</li>
        <li>open source and latest react</li>
      </ol>
      </div>
  )
}
function Footer(){
  return(
  <footer className="footer">
  <small>@ 2024 Thomas development. All rights reserved.</small>
</footer>
  )
}
function Page(){
  // function Header(){
    return(
      <div>
     {/* <Header/> */}
      <Main/>
      <Footer/>
      </div>
    )
  // }
  }
  //ReactDOM.render(<Header/>, document.querySelector('#root'));
  // ReactDOM.render(<Nav/>, document.querySelector('#root'));
  // ReactDOM.render(<Footer/>, document.querySelector('#root'));
 ReactDOM.render(<Page/>, document.querySelector('#root'));

  