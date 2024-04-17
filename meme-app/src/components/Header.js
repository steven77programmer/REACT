import React from "react";
import memeimg from "../images/trollface.png";
function Header(){

    return (
        <div className="header">
<img src={memeimg}/>
<h2>Meme Generator</h2>
<h4>React-course - Project 3</h4>
        </div>
    )
}
export default Header;