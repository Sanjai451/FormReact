import { useEffect, useState } from 'react'

import './App.css'
import Basics from './Components/Basics'
import Advanced from './Components/Advanced'
import Submit from './Components/Submit'

function App() {
  const [disp,setDisp] = new useState({
    basic:true,
    adv:false,
    submit:false
  })

  const [data,setData] = useState({
    name : '',
    email : '',
    phone : '',
    college : '',
    city : '',
    cnfrm : false,
  })

  const [err,setErr] = useState({
    name : false,
    email : false,
    phone : false,
    college : false,
    city : false,
    cnfrm : false,
  })



  const retrivedValue  = JSON.parse(localStorage.getItem('data'))
  console.log('Local Storage====>',retrivedValue)



  const handleDataChange = (e)=>{
    
    const tempData = {...data}
    console.log(tempData)
    const value = e.target.value
    const name = e.target.name
    console.log(name,'-',value)
    handleValidate(name,value)
    tempData[name] = value
    setData({...tempData})

  }

  const handleDisplay = (e) =>{
   const data = {...disp}
   console.log('Before',data)
   console.log(e.target.name)
   //making all as false
  for(let i in data){
      data[i] = false
    }
   //making particular  as true
   data[e.target.name] = true
   console.log('after',data)
   setDisp(data)
  }

  const storeLocal = () =>{
    console.log(err)
    if(!err.name && !err.email && !err.city && !err.phone && !err.college){
      console.log(data)
      localStorage.setItem('data',JSON.stringify(data))
    }
    else{
      alert('Fill the Form Correctly')
    }
  }

  const regex = {
    name: "^[a-zA-Z\s.-_ ]{2,50}$",
    email: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
    college: "^[a-zA-Z0-9\s.,'-]{2,100}$",
    phone: /^\d{10}$/,
    city: "^[a-zA-Z\s.-]{2,50}$"
   }

  const handleValidate = (name,value) =>{
  //  console.log(nameRegex)

  if(value.match(regex[name])){
    const errdata = {...err}
    errdata[name] = false
    setErr(errdata)
  }else{
    const errdata = {...err}
    errdata[name] = true
    setErr(errdata)
  }
}


  return (
    <>
    <h2>React Forms Using LocalStorage</h2>
      <ul>
        <a name='basic' onClick={handleDisplay} className={ disp.basic?'bgColorNav':'' }>Basic</a> 
        <a name='adv' onClick={handleDisplay} className={ disp.adv?'bgColorNav':'' } >Advanced</a>
        <a name='submit' onClick={handleDisplay} className={ disp.submit?'bgColorNav':'' } >Submit</a>
      </ul>

      <div className="comp">

        {
          disp.basic && <Basics handleDisplay={handleDisplay} 
                                data = {data} 
                                handleDataChange = {handleDataChange}
                                err = {err}
                                ></Basics>
        }
        
        {
          disp.adv &&  <Advanced handleDisplay={handleDisplay} 
                                data = {data} 
                                handleDataChange = {handleDataChange} 
                                err  = {err}
                                ></Advanced>
        }
        
        {
          disp.submit && <Submit handleDisplay={handleDisplay} 
                                  data = {data} 
                                  handleDataChange = {handleDataChange}
                                 storeLocal = {storeLocal} 
                                 err = {err}
                                 ></Submit>
        }
  
      </div>

      <div>
        <table>
          <tbody>
          <tr>
            <td>Name :</td>
            <td>{data.name} </td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>{data.email} </td>
          </tr>
          <tr>
            <td>Phone :</td>
            <td>{data.phone} </td>
          </tr>
          <tr>
            <td>College :</td>
            <td>{data.college} </td>
          </tr>
          <tr>
            <td>City :</td>
            <td>{data.city} </td>
          </tr>
          <tr>
            <td>Accept :</td>
            <td>{data.cnfrm? 'Yes' : 'No'} </td>
          </tr>
          </tbody>
        </table>
        {
        retrivedValue && 
        <div className="local">
        <h3>From LocalStorage</h3>
        <table>
          <tbody>
          <tr>
            <td>Name :</td>
            <td>{retrivedValue.name} </td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>{retrivedValue.email} </td>
          </tr>
          <tr>
            <td>Phone :</td>
            <td>{retrivedValue.phone} </td>
          </tr>
          <tr>
            <td>College :</td>
            <td>{retrivedValue.college} </td>
          </tr>
          <tr>
            <td>City :</td>
            <td>{retrivedValue.city} </td>
          </tr>
          <tr>
            <td>Accept :</td>
            <td>{retrivedValue.cnfrm? 'Yes' : 'No'} </td>
          </tr>
          </tbody>
        </table>
        </div>}
      </div>
    </>
  )
}

export default App
