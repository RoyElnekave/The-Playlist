import React, { useContext, useState } from "react";
import "./songs.css";

import { SongContext, likeContext } from "../context/MainContext";

export default function SongsList() {
  const {songs, setSongUrl} = useContext(SongContext)
  const [input, setInput] = useState("🤍");
  const {playlist, setplaylist} =useContext(likeContext)
  console.log(setplaylist);
  const sendSong = (e)=>{
      setSongUrl(e.target.id)
    
  }
   const heart= (v)=>{
     if (input==="🤍")
    setInput("❤️")
    if (input==="❤️")
    setInput("🤍")
}
 

const play= (e)=>{
  console.log(e.target.id);
  setplaylist(e.target.id)}
  
  return (
    <div className="songL">
      {songs.map((v) => (
       <div> <div className="song" id={v.id} onClick={sendSong}> 
        <img className="imgSong" id={v.id} src={v.thumbnail.url} alt="040"/>
      <div className="songName"> <b > {v.title}</b> </div>
      </div>
      <button className="like" id={[v.id+","+ v.thumbnail.url+","+ v.title]} onClick={play}> {input}</button>
      </div> 
        
      ))}
    </div>
  );
}


