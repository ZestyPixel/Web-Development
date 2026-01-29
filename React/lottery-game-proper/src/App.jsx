import './App.css'
import { sum } from './helper';
import Lottery from './Lottery'

function App() {
  function winCondition(ticket){
    return sum(ticket) === 15;
  }
  return (
    <>
    <Lottery num={3} winningCondition={winCondition}/>
    </>
  )
}

export default App
