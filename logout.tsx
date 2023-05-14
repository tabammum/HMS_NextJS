// import React from "react";
// import Layout from "./component/layout";


// export default function Logout() {
//     return (
//         <>
//          <center>
//               <Layout/>
//             <h1 className="mb-4 text-2xl font-bold"
            
//             > Logout Page </h1>
//             </center>
//         </>
//     )
// }


import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';
import Footer from './component/footer';

export default function Session() {
  const [email, setEmail] = useState<any | null>(null);
    const router = useRouter();
    
  useEffect(() => {
      if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
      {
          const session = sessionStorage.getItem('email');
          if (session) {
            setEmail(sessionStorage.getItem('email'));
           
          }          
      }
   
  }, []);

    const handleLogout = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get("http://localhost:3000/accountants/signout")
            console.log(response.data)
            sessionStorage.removeItem('email');
            setEmail(null);
            router.push('Accountants/login');
          } catch (error) {
            console.error(error)
          }
    
  };

  return (
    <>
          {email !== null ? (
        <>
          <div className="flex md:order-2">
     
          <a href="#" className="pr-3 pt-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">{email}</a>
          <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}>Logout</button>
      
           <Link href="/Accountants/homepage" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Homepage</Link>
          
               
          </div>
     
            </>
      ) :
       (
        <div className="flex md:order-2">
              <Link href="Accountants/login"
            className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
          Login
        </Link>
           
        </div>
    
       
      )}
     
    </>
  );
}