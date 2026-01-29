import { useState } from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);

    let toggleLike = ()=>{
        setIsLiked(!isLiked);
    }

    let red = {color : "red"}

    return(
        <h1 onClick={toggleLike}> {isLiked ? <i className="fa-solid fa-heart" style={red}></i> : <i className="fa-regular fa-heart"></i>} </h1>
    );
}