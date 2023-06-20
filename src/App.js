import React from 'react'
import './App.css';
import {useFormik} from "formik";
import { signupschema } from './schemas';

const initialvalues={
  name:"",
  email:"",
  pass:"",
  pass2:"",
};




const App = () => {

  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialvalues,
    validationSchema:signupschema,
    onSubmit:(values,action)=>{
      console.log(values);
      action.resetForm();
    },
  });

  console.log(errors);





  return (
    <>
      <div style={{border:"2px solid black",backgroundColor:"white",marginTop:"7rem",width:"40rem",marginLeft:"20rem",height:"40rem",marginBottom:"5rem"}}>
      <div className="ul">
      <form onSubmit={handleSubmit}>
          Name
          <br></br>
          <input type="text" name="name" className="input" value={values.name} onChange={handleChange} onBlur={handleBlur}></input> 
          {errors.name&&touched.name?(<p>{errors.name}</p>):null}
          <br></br>    
          E-Mail
          <br></br>
          <input type="email" name="email" className="input" value={values.email} onChange={handleChange} onBlur={handleBlur}></input>
          {errors.email&&touched.email?(<p>{errors.email}</p>):null}
          <br></br>
          Password
          <br></br>
          <input type="password" name="pass" className="input" value={values.pass} onChange={handleChange} onBlur={handleBlur}></input> 
          {errors.pass&&touched.pass?(<p>{errors.pass}</p>):null}
          <br></br>   
          Confirm-Password
          <br></br>
          <input type="password" name="pass2" className="input" value={values.pass2} onChange={handleChange} onBlur={handleBlur}></input>
          {errors.pass2&&touched.pass2?(<p>{errors.pass2}</p>):null}
          <br></br>
          <button type="submit">SUBMIT</button>
          </form>
      </div>
      </div>
    </>
  )
}

export default App