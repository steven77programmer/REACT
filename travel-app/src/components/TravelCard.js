import React from "react";
import { IoLocationSharp } from "react-icons/io5";
function tonamedate(datestring){
//const datestring=date;
const date=new Date(datestring);
const month=date.getMonth();
const monthName=date.toLocaleString("en-US",{month:"long"});
const day=date.getDate();
const year=date.getFullYear();
const formattedDate= `${day} ${monthName}, ${year}`;
return formattedDate;
}
function TravelCard(props){
    console.log(props);
return(
    <div className="card">
     {/* <img src="./images/grandcanyon.jpg"/> */}
     <img src={`../images/${props.card.imageUrl}`}></img>
     <div className="info">
<div className="location">
<IoLocationSharp className="icon"/> 
<h4>{props.card.location}</h4> 
<a href={`${props.card.googleMapsLink}`}>View on Google Maps</a>
</div>
<h2>{props.card.title}</h2>
{/* <h5>{props.card.startDate} - {props.card.endDate}</h5> */}
<h5>{tonamedate(props.card.startDate)} - {tonamedate(props.card.endDate)}</h5>
<p>{props.card.description}</p>

     </div>
    </div>
)
}
export default TravelCard;