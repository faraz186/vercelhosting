import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Todo from "./Components/Todos/Todo";
import Input from "./Components/Input.jsx/Input";

const App = () => {
  let [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: 0,
    occuption: "",
  });

  const [records,setRecords] = useState([])

  console.log(registration);


  const handleSubmit = ()=>{
    setRecords([...records,{registration}])

    setRegistration({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: 0,
    occuption: "",
    })
  }

  console.log(records)
  return (
    <>
      <Input
      value={registration.firstName}
        onchange={(e) =>
          setRegistration({ ...registration, firstName: e.target.value })
        }
        label="Enter first name"
        type="text"
      />

      <Input
      value={registration.lastName}
        onchange={(e) =>
          setRegistration({ ...registration, lastName: e.target.value })
        }
        label="Enter last name"
        type="text"
      />

      <Input
      value={registration.email}
        onchange={(e) =>
          setRegistration({ ...registration, email: e.target.value })
        }
        label="Enter email"
        type="text"
      />

      <Input
      value={registration.password}
        onchange={(e) =>
          setRegistration({ ...registration, password: e.target.value })
        }
        label="Enter password"
        type="text"
      />

      <Input
      value={registration.age}
        onchange={(e) =>
          setRegistration({ ...registration, age: e.target.value })
        }
        label="Enter age"
        type="text"
      />

      <Input
      value={registration.occuption}
        onchange={(e) =>
          setRegistration({ ...registration, occuption: e.target.value })
        }
        label="Enter occuption"
        type="text"
      />


      <button onClick={handleSubmit}>Submit</button>

      
            <table>
                <thead>
                  <tr>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Age</td>
                    <td>Email</td>
                  </tr>
                </thead>

                <tbody>
                  {
                    records.map((e,i)=>{
                      return(
                        <tr>
                          <td>{e.registration.firstName}</td>
                          <td>{e.registration.lastName}</td>
                          <td>{e.registration.age}</td>
                          <td>{e.registration.email}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
            </table>

          
       
      
    </>
  );
};

export default App;
