//Presentation Component

import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
  return (
    <div>
      {ticket.map((tick) => (
        <span><TicketNum num={tick} key={tick} /> </span>
      ))}
    </div>
  );
}
