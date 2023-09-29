import React from 'react'
import { getUsers } from '../../../services/userlist'
import Link from 'next/link';




// Fetching all users data from userlist.js and displaying it on page

const page =  async () => {
    const users = await getUsers();
    
    console.log(users);
  return (
    <div>
      <h1>Users List</h1>

      {
        users.map((item)=>(
            <div key={item.id} className='user-container'>
                <h2>Name: {item.username}</h2>

                {/* Enabling Dynamic Routing to show single user details */}
              <Link href={`/users/${item.id}`}> <h2> Id:{item.id}</h2></Link> 
                <h3> Gender:{item.gender}</h3>
                <h3> Email: {item.email}</h3>
                <h3>Phone: {item.phone}</h3>

            </div>
        ))
      }
    </div>
  )
}

export default page
