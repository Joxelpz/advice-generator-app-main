import './App.css';
import image from "../src/images/icon-dice.svg"
import separatorD from "../src/images/pattern-divider-desktop.svg"
import separatorM from "../src/images/pattern-divider-mobile.svg"
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

const [advice, setAdvice] = useState("")
const [loading, setLoading] = useState(false)


useEffect(() =>{
  handleOnClick()
},[setAdvice])

function handleOnClick(){
  setLoading(true)
  axios.get("https://api.adviceslip.com/advice").then((res) => {
    const {slip} = res.data
    setAdvice(slip)
    setLoading(false)
  })
}


  return (
    <div className="App">
      <div className='container-app'>
        <h1 className='title-id'>advice # {advice.id}</h1>
        <div className='text-card'><h2>"{advice.advice}"</h2></div>
        <div className='separator'><img src={separatorD} alt=""/></div>
        <div className='separator-movil'><img src={separatorM} alt=""/></div>
        <div className={`button ${ loading ? "rotate-n" : "rotate"}`} onClick={handleOnClick}><img src={image} alt=""/></div>
      </div>
    </div>
  );
}

export default App;
