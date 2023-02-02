// import Button from './cont/buttons/button';
import "./cont/buttons/button.css"
import './App.css';
import { useState } from 'react';
import Input from "./cont/buttons/inputs/input";
import Form from "./cont/buttons/Form/form";

const App =()=> {
  // const [count, setCount] = useState(0)
  // const [text, setText] = useState("")
  // const onChange = (e) => {
  //   setText(e.target.value)

  // }
  // const oC = ()=>{
  //   setCount(count + 1)
  // }
  // console.log(text)
  return (
    <div className="App">
      
   {/* <Button onClick ={oC}>
    {count}
   </Button> */}

   {/* <Input onChange={onChange} /> */}
  <Form/>
   
    </div>
    
  );
}


export default App;
