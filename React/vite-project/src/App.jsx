//Rules of writing:
//1. Camel Case for naming the component
//2. Close all tags
//3. Always return a single element (can be achieved using div or React fragments <> </>)
//4. Component names must start with a capital letter
//Curly braces {} are used to embed JS expressions in JSX
import './App.css';
import ProductTab from './ProductTab';
// import Title from "./Title" Default import
import {Title} from "./Title";

function Description(){
  return <h3>I am the description</h3>;
}

function App() {
  return( //Whatever this component returns is what gets rendered on the screen.;
    <>
      <Title/>
      <Description/> 
      <Title/>
      <Description/>
      <Title/>
      <Description/>
      {2*2*2*2 /*Embedded javascript*/} 
      <ProductTab/>
    </>
  );
}

export default App;