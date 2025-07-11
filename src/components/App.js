
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {

const [step,setStep] = useState(0);
  const handleprev=()=>{
    setStep(step-1);
  }
  const handlenext=()=>{
    setStep(step+1);
  }

  const handlesubmit = (event)=>{
    event.preventDefault();
    setStep(0);
    
  }
  return (
    <div>
        
        <div id="step1">
        {
              step===0 && (<Step
                id1={"first_name"}
                id2={"last_name"}
                name1={"firstname"}
                name2={"lastname"}
                label1={"First Name:"}
                label2={"Last Name:"}
                handlenext={handlenext}
                 
              />)
        }
        </div>
         <div id="step2"> 
         {
            step===1 &&( 
               <Step
            id1={"model"}
            id2={"car_price"}
            name1={"model"}
            name2={"carprice"}
            label1={"Model:"}
            label2={"Price:"}
            handlenext={handlenext}
            handleprev={handleprev}
            />
            )
        }
         </div>
        <div id="step3">
        {
           step===2 &&   (<div id="step3">
            <Step
           
           id1={"card_info"}
           id2={"expiry_date"}
           name1={"cardnumber"}
           name2={"exipryDate"}
           label1={"Credit Card Number:"}
           label2={"Expiry Date:"}
           handleprev={handleprev}
            handlesubmit={handlesubmit}
           />
           </div>)
          
        }
        </div>
    </div>

  )
}

export default App
