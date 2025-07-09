import React from 'react'

const Step = (props) => {
    const{id1,id2,handleprev,handlenext,label1,label2,name1,name2,handlesubmit}  = props;
    
  return (
    <div>
  <form onSubmit={handlesubmit}>
    <label for={id1}>{label1}</label>
    <br></br>
    <input id={id1} name={name1}></input>
    <br></br>
    <label for={id2}>{label2}</label>
    <br></br>
    <input id={id2} name={name2}></input>
    <br></br>
    {
        handleprev && (<button type="button"  onClick={handleprev}>Prev</button>)
    }
    
    {
        handlenext && (<button  type="button" onClick={handlenext}>Next</button>)
    }
    
    {
       handlesubmit && <button type="submit">submit</button>
    }
  </form>

    </div>
  )
}

export default Step