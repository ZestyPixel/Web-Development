import { useState } from "react";
import { generate } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({num, winningCondition}){
    let [ticket, setTicket] = useState(generate(num));
    let isWinning = winningCondition(ticket);

    function buyTicket(){
        setTicket(generate(num));
    }

    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
                <button onClick={buyTicket}>Buy New Ticket</button>
                <h2>{isWinning && "Congrats You WON"}</h2>
            </div>
        </div>
    );
}