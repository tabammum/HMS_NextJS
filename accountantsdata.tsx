import React from "react"; 
 //import Image from 'next/image'

export default function AccountantsLayout({data})   
{
    return(
        <>
      <h1>Id:{data.id}</h1>
      <h1>Name: {data.name}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Password: {data.password}</h1>
      {/* <h1>Picture: </h1>
      <Image src={"http:/localhost:3000/accountants/getimage/"+data.filename} alt="me" width="150" height="150" /> */}
     
      </>
    )
}