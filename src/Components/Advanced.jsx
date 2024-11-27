import React from 'react'

const Advanced = ({handleDisplay,data,handleDataChange,err}) => {
  return (
    <div>
        <label htmlFor="college"></label>
        <input type="text"  placeholder='Enter college ' name='college' value={data.college} onChange={handleDataChange} />
        {err.college && <div className="err">Invalid College</div>}
        <br />

        <label htmlFor="city"></label>
        <input type="text"  placeholder='Enter city '  name='city' value={data.city} onChange={handleDataChange} />
        {err.city && <div className="err">Invalid City</div>}
        <br />

        <button name='basic' onClick={handleDisplay}>Previous</button>
        <button name='submit' onClick={handleDisplay}>Next</button>

    </div>
  )
}

export default Advanced
