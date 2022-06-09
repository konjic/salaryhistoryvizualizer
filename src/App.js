import '@progress/kendo-theme-default/dist/all.css';  
import './App.css';
import ChartContainer from './Components/Graph'
import { useState,useRef } from 'react';
import { useLocalStorage } from "../src/useLocalStorage"
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';


function App() {


  const addValues = (salariu) => {
    setSalariu([...salariu,inputRef2.current.value])
    setCategories([...categories,inputRef.current.value])


  };

  const clearCache =()=>{
    localStorage.clear()
    window.location.reload(false);
  }

  const handleTextChange = () => {

    enableButton(   /^\d+$/.test(inputRef2.current.value) );
 
  };





  // const [categories,setCategories] = useState([])
  // const [salariu,setSalariu] = useState([])
  const [salariu,setSalariu] = useLocalStorage("salariu",[])
  const [categories,setCategories] = useLocalStorage("categorie",[])


  const [text, enableButton] = useState("");

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  return (
    <div className="App">

      <h1>Salary History Visualisation</h1>
      <ChartContainer data={3} timespan={categories} valori={salariu}/>


{/* <label>
    Luna:
    <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
        autoComplete="off"
      />
  </label> */}

<TextField id="standard-basic" label="Luna/Anul" variant="standard"  inputRef={inputRef}/>




  {/* <label>
    Salariu:
    <input
        onChange={handleTextChange}
        type="text"
        id="message"
        name="message"
        autoComplete="off"
        ref={inputRef2}
    />
  </label> */}

  <TextField id="standard-basic" label="Salariu" variant="standard" onChange={handleTextChange} inputRef={inputRef2} style={{marginLeft:50}}/>


    <br/>


    <br/>

      <Button Button variant="contained" onClick={() => addValues(salariu)} disabled={!text} >Submit</Button>

      <br/>
      <br/>
     
      <Button variant="contained" onClick={() => clearCache()}  >Reset</Button>



    <div className='footer'>
    <a href="https://www.linkedin.com/in/razvan-burloiu-47750b13b/" target="_blank" > © Burloiu Razvan  </a> 
    </div>

    </div>
  );
}

export default App;
