import React, { useState } from "react";

const Signup = ({click}) => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name,email,password)
  }

  return (
    <div>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter name</label>
        <input onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Enter name" />

        <br />
        <br />

        <label htmlFor="">Enter Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" name="name" placeholder="Enter Email" />

        <br />
        <br />

        <label htmlFor="">Enter password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" name="name" placeholder="Enter password" />

        <br />
        <br />
        <a href="#" onClick={click}>Already have an account login!!</a>
        <br />
        <br />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
