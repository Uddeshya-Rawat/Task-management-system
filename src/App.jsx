import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard'
import AdminDashboard from './components/EmployeeDashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);// store context(data) in variable name data using context . it is from authContext


  // check employee login or admin 
  useEffect(() => {
    const loggedInUser=localStorage.getItem("loggedInUser");
    if(loggedInUser){
     const userData=JSON.parse(loggedInUser);
     setUser(userData.role);
    setLoggedInUserData(userData.data);
  }
  }, [])// we passed the authData in the array if it authdata  changes then this function will again get executed


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == "123") {
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" })) // who is log in
    }
    else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password);
      console.log(employee)
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" , data: employee})) // who is logiin in
        console.log("this is working");
      }

    }
    else {
      alert("wrong credentials")
    }


    console.log(loggedInUserData);
  }
  // handle login will handle who is loggin




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard data={{firstName:"Admin"}} changeUser={setUser}/> : ''}
      {user==="employee"?<EmployeeDashboard data={loggedInUserData} changeUser={setUser}/>:""}
     


    </>
  )
}

export default App

