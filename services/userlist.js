
//Making api and use it on different components to fetch data from here
export const getUsers = async ()=>{
const response = await fetch("https://dummyjson.com/users");
try {
    if(!response.ok){
        throw new Error("Error fetching api")

    } 
   const data = await response.json();
   console.log(data)
   return data.users;
   
} catch (error) {
    console.log("Error fetching erro", error)
}
}