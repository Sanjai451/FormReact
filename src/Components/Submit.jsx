import React from 'react'

const Submit = ({handleDisplay,data,handleDataChange,storeLocal,err}) => {
  return (
    <div>
        <input type="checkbox" value={data.cnfrm} name='cnfrm' onChange={handleDataChange}  id="" />
        <label htmlFor="cnfrm">Accept</label>
        <br />
       <button name='adv' onClick={handleDisplay}>Prev</button>
       <button onClick={storeLocal} disabled={err.name ||
                                              err.email || 
                                              err.phone || 
                                              err.college
       } >Submit</button>
    </div>
  )
}

export default Submit
