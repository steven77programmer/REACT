import React from "react";
//import { Button } from "@mui/material";
import blob1 from '../images/blob1.svg'
import blob2 from '../images/blob2.svg'

const IntroPage = (props) => {
  return (
    <div className="introPage">
     
        <img className="blobsIcon" alt="" src={blob1} />
        <div className="quizzicalParent">
          <b className="quizzical">Quizzical</b>
          <div className="someDescriptionIfNeededWrapper">
            <div className="someDescriptionIf">
              Quiz about Technology
            </div>
          </div>
          <div className="playAgainButton">
          <button
            className="playAgainButton1"
           onClick={props.change}
            // sx={{
            //   textTransform: "none",
            //   color: "#f5f7fb",
            //   fontSize: "16",
            //   background: "#4d5b9e",
            //   borderRadius: "15px",
            //   "&:hover": { background: "#4d5b9e" },
            //   width: 193,
            // }}
          >
            Start quiz
          </button>
        </div>
    
        </div>
       
        
      <img
        className="blobsIcon11"
        loading="lazy"
        alt=""
        src={blob2}
      />
    </div>
  );
};

export default IntroPage;