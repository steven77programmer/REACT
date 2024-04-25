import React from "react";
//import memesData from "../components/memesData";


function Form(){
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomimage:"https://i.imgflip.com/24y43o.jpg"
    })
    // const [allMemeImages,setAllMemeImages]=React.useState(memesData);
   // const [allMeme,setAllMeme]=React.useState(memesData);
    const [allMeme,setAllMeme]=React.useState([]);
   // const [url,setUrl]=React.useState("http://imgflip.com/lbij.jpg");

React.useEffect(()=>{
fetch("https://api.imgflip.com/get_memes")
.then(res=>res.json())
.then(data=>setAllMeme(data.data.memes))
},[])

    function handleClick(){
       // console.log(memesData.data.memes);
        // const memes=memesData.data.memes;

        // const memes=allMemeImages.data.memes;
        // const memes=allMeme.data.memes;
        const memes=allMeme;
        // console.log(memes[(Math.floor(Math.random()*memes.length))].url);
        const imageurl=memes[(Math.floor(Math.random()*memes.length))].url;
        console.log(imageurl);
        //setUrl(imageurl);
        setMeme(prev=>({  
            ...prev,
            randomimage:imageurl
    }))
    }
    function handleChange(e){
     console.log("nothing yet");
      const {name,value}=e.target;
      setMeme(prev=>({  
        ...prev,
        [name]:value
}))
console.log(meme);
    }
    return(
        // <form>
<div className="Form">
<div className="cont">
<div className="topcont" >
<span>Top text</span> 
<input 
type="text"placeholder="Shut up" 
onChange={handleChange}
name="topText"
value={meme.topText}
/>  
</div>
<div className="botcont" >
<span>Bottom text</span> 
<input 
type="text" placeholder="And take my money" 
onChange={handleChange}
name="bottomText"
value={meme.bottomText}
/>  
</div>

</div>
{/* <input type="submit" id="submit" value="Get a new meme image 🖼"/> */}
<button id="submit" onClick={handleClick}>Get a new meme image 🖼</button>

<div className="imgcont">
    {/* <img src={url}/> */}
    <img src={meme.randomimage} alt="meme"/>
    <h2 className="toptext" >{meme.topText}</h2>
    <h2 className="bottext" >{meme.bottomText}</h2>
</div>
</div>

// </form>
    )
}
export default Form; 


