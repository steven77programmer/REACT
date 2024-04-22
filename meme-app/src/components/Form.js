import React from "react";
import memesData from "../components/memesData";

function Form(){
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomimage:"http://imgflip.com/lbij.jpg"
    })
    const [allMemeImages,setAllMemeImages]=React.useState(memesData);
   // const [url,setUrl]=React.useState("http://imgflip.com/lbij.jpg");
    function handleClick(){
       // console.log(memesData.data.memes);
        // const memes=memesData.data.memes;
        const memes=allMemeImages.data.memes;
        // console.log(memes[(Math.floor(Math.random()*memes.length))].url);
        const imageurl=memes[(Math.floor(Math.random()*memes.length))].url;
        console.log(imageurl);
        //setUrl(imageurl);
        setMeme(prev=>({  
            ...prev,
            randomimage:imageurl
    }))
    }
    function handleText(){
     console.log("nothing yet");
    }
    return(
        // <form>
<div className="Form">
<div className="cont">
<div className="topcont" onMouseLeave={handleText}>
<span>Top text</span> 
<input type="text"placeholder="Shut up"/>  
</div>
<div className="botcont" onMouseLeave={handleText}>
<span>Bottom text</span> 
<input type="text" placeholder="And take my money"/>  
</div>

</div>
{/* <input type="submit" id="submit" value="Get a new meme image 🖼"/> */}
<button id="submit" onClick={handleClick}>Get a new meme image 🖼</button>

<div className="imgcont">
    {/* <img src={url}/> */}
    <img src={meme.randomimage}/>
</div>
</div>

// </form>
    )
}
export default Form; 


