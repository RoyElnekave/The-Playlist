import React, { useContext } from "react";
import { likeContext } from "../context/MainContext";

 export default function LikeIt(){
    const {playlist , setplaylist} =useContext(likeContext)
    console.log(playlist);

    // let mom = playlist
    // mom =mom.toString()
    // mom= mom.split(",")
    // console.log(mom);
    return 
    <h1>hello</h1>
//     <div className="likit"> <div className="song2" id={mom[0]} onClick={<h1>hhh</h1>}> 
//     <img className="imgSong2" id={mom[0]} src={mom[1]} alt="040"/>
//   <div className="songName2"> <b > {mom[2]}</b> </div>
//   </div>
//   <button className="like2" onClick={<h1>hhh</h1>}> {<h1>hhh</h1>}</button>
//   </div> 
    
  }

  