import React from "react";
import axios from "axios";
import { useRouter } from 'next/router'
 //import Image from 'next/image'

export default function AccountantsProfile({ data } ) {
const router = useRouter();
    return (
      <>
      
   
      <h1>Id:{data.id}</h1>
      <h1>Name: {data.name}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Password: {data.password}</h1>
      {/* <h1>Picture: </h1>
      <Image src={"http:/localhost:3000/accountants/getimage/"+data.filename} alt="me" width="150" height="150" />
      */}
     <br></br>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('http://localhost:3000/accountants/findone/'+id);
    const data = await response.data;
   
return { props: { data } }
}