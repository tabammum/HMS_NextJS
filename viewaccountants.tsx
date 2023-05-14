import Link from "next/link"
import React from "react";
import axios from "axios";
import Layout from "./component/layout";



export default function GetUsers({ data }) {
    
  return (
      <>
      <Layout/>
      <center> 
      <h1 className="mb-4 text-2xl font-bold">All Accountants</h1>
     <div className="mb-4"> 
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/accountants/component/layout"+item.id}>Name: {item.name} <br></br>
        Email: {item.email} <br></br>
        Password: {item.password} <br></br>
        Filename: {item.filename} <br></br> 

      
        </Link>
        
            </li>
           
        ))}
      </ul>
      </div>
      </center>
      
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/accountants/findall');
      const data = await response.data;
    
  return { props: { data } }
  }

  