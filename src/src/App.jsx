import { useState,useEffect } from 'react'
import './App.css'


function App() {

  const [sayi,setCount] = useState(0)
  useEffect(() => { 
    if(sayi==5){
      alert("number 5")
    }
  
    
  }, [sayi])
  
console.log(sayi)
const myFunction=()=>{setCount((up) => up + 1)}
  return (
    <>
      
      
      <div  className="card">
      <h1><div > Sayı: {sayi}</div></h1>
        <button onClick={myFunction }>
          up
          
        </button>
        
        <button onClick={sayi => setCount((down) => down - 1)}>
          down 
        </button>

      
        
      </div>
    


   
    </>

  )
}

export default App
