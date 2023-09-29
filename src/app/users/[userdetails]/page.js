import React from 'react'
import { getUsers } from '../../../../services/userlist'


// Fetching single user details by dynamic routing in server component.  Also using SSG (Static Site Generation)



const page = async (props) => {


  //Process of accessing single user details from all user details by filtering through id
    const userlist =  getUsers();
    const users = await userlist;
    const currentId = props.params.userdetails;
    const userData = users[currentId-1]

    console.log(users[currentId-1])
    
  return (
    <div style={{display: 'flex', flexDirection:"column"}}>

      {/* Displaying single user details by filtering through id using dynamic routing of nextjs */}
      <h1 >Users Details</h1>
    <h2>Name: {userData.username}</h2> 
     <h2>Email: {userData.email}</h2> 
    <h2>Phone:  {userData.phone}</h2> 
    <h2>Gender: {userData.gender}</h2> 
    </div>
  )
}

export default page

// Static side generation 

export async function generateStaticParams(){
  const userlist =  getUsers();
    const users = await userlist;
    return users.map(item=>({
      userdetails: item.id.toString()
    }))
}