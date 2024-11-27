import React from 'react'

const Basics = ({handleDisplay,data,handleDataChange,err}) => {
  return (
    <div>
        <label htmlFor="name"></label>
        <input type="text" value={data.name} name='name' onChange={handleDataChange} placeholder='Enter name '/>
        {err.name && <div className="err">Invalid Name</div>}
        <br />

        <label htmlFor="email"></label>
        <input type="text" value={data.email} name='email' onChange={handleDataChange}   placeholder='Enter email '/>
        {err.email && <div className="err">Invalid email</div>}
        <br />

        <label htmlFor="phone"></label>
        <input type="text" value={data.phone} name='phone' onChange={handleDataChange}  placeholder='Enter phone '/> 
        {err.phone && <div className="err">Invalid phone Number</div>}
        <br />


        <button name='adv' onClick={handleDisplay}>Next</button>

    </div>
  )
}

export default Basics
