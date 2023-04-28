import Header from "../../components/Header";
import React,{ useEffect, useState} from "react";
import './Users.css'


function Users() {
    const [users,setUsers] = useState([])
    const [searchUsers, setsearchUsers] = useState("")

    const getUsers = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>setUsers(data))
    }
    useEffect(()=>{
        getUsers()
    },[searchUsers])

    const handleSearchInput = (e) => {
        e.preventDefault()
        setsearchUsers(e.target.value)
    }

    const filteredData = users.filter((item) =>
    item.name.toLowerCase().includes(searchUsers.toLowerCase())
  );

  console.log(filteredData)


  return (
  <>
    
    <input type="text" id="search" name="search" placeholder="Search for the user details here" value={searchUsers} onChange={handleSearchInput}/><br/>

  <table>
  <caption>Users Information</caption>
  <thead>
  <tr>
  <th>Name</th>
  <th>Email</th>
  <th>Phone</th>
</tr>
  </thead>
  <tbody>

  {searchUsers===''?
    users.map((user,index)=>(
        <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        </tr>
    )):(filteredData.map((item, index) => (
        <tr key={index}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        </tr>
       
      )))
  }

  </tbody>
</table>
  </>

  )
}

export default Users
