import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({
        blue:0,
        red:0,
        yellow:0,
        green:0
    });

    function inc(color){
        setMoves((prevMoves)=>{
            return {...prevMoves, [color]: prevMoves[color] + 1};
        }); //We have to send the entire object again because otherwise react will not know that a key has 
        // changed and will not re-render the component.
    }

    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {moves.blue} </p>
                <button style={{backgroundColor: "blue", color: "white"}} onClick={()=>inc("blue")}>+1</button> //We use a callback function to avoid immediate execution
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red", color: "black"}} onClick={()=>inc("red")}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green", color: "black"}} onClick={()=>inc("green")}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={()=>inc("yellow")}>+1</button>
            </div>
        </div>
    );
}