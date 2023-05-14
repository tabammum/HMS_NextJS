// import React from "react";
// import { useState } from 'react';
// import Link from 'next/link';
// import { Console } from "console";
// import Layout from "./component/layout";
// import {AiFillCheckCircle} from 'react-icons/ai'
// import router, { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { ErrorMessage } from "@hookform/error-message";

// const Registration= () => { 
    
//     const {register,  formState: { errors }}= useForm({
//         defaultValues:{
//         name:'',
//           email:'',
//           password:''
        
//         }

//     });
    
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isSuccessful, setIsSuccessful] = useState(false);
//     const[success, setSuccess]= useState('');
    

    
//     const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setName(e.target.value);
//     };

//     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//     };

    
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         // Handle form submission here
//         console.log(name, email, password);
//         setIsSuccessful(true);
       

        
       
        
           
          
//     };

//     return (
    
//         <div className="flex h-screen min-h-screen md:flex-row">
            

            
//             <div className="flex items-center justify-center flex-1 md:w-1/2">
//                 <form onSubmit={handleSubmit} className="w-full max-w-md">
//                      {isSuccessful && (
//                         <div className="flex items-center justify-start my-4 text-green-500 space-between alert alert-success">
//                             <AiFillCheckCircle />Registration request submitted successfully!
//                         </div>
//                      )}
                    
//                     <h2 className="mb-4 text-2xl font-bold">Register</h2>
                    
//                    <div>
//                     <label htmlFor="name" className="block mb-2 font-medium">
//                         Name
//                     </label>
//                     <input
//                         {...register("name", {required:true})}
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={name}
//                         onChange={handleNameChange}
//                         className="block w-full h-8 mb-4 border-gray-400 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    

//                     />

// {errors.name &&
//         <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Name is required</span></p>
//  }
//                   </div>
//                     <div>
//                     <label htmlFor="email" className="block mb-2 font-medium">
//                         Email
//                     </label>
//                     <input
//                         {...register("email", {required:true})}
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         className="block w-full h-8 mb-4 border-gray-400 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     />

// {errors.email && (                  
//            <p>
//                             {errors.email.type === 'required'                                                     ?
//                                                      <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Email is required</span></p>

//                                                      :
//                                                     <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Invalid email address</span></p>
//                                                 }
//                        </p>
//                   )}
//                  </div>
//                   <div>
//                     <label htmlFor="password" className="block mb-2 font-medium">
//                         Password
//                     </label>
//                     <input
//                         {...register("password", {required:true})}
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                         className="block w-full h-8 mb-4 border-gray-400 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     />

// {errors.password && (
//                              <p>
//                              {errors.password.type === 'required'                                                     ?
//                                                      <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">password is required</span></p>
//                                                 :
//                                                  <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Invalid password pattern</span></p>

//                                  }
//                         </p>
//                     )}
//                </div>
                  
                    
                    

//                     <button
//                         type="submit"
//                         className="w-full px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
//                     >
//                         Register
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Registration;




import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import Layout from "./component/layout"
import { useRouter } from 'next/router'
import SessionCheck from './component/sessioncheck'
import Footer from './component/footer';
import Link from 'next/link';


export default function Registration() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    // const validateFile = (value) => {
    //     const file = value[0];
    //     const allowedtypes = ["image/jpg", "image/png"];

    //     if (!allowedtypes.includes(file.type)){
    //         return false;
    //     }
    //     }

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        // formData.append('address', data.address);
        // formData.append('myfile', data.myfile[0]);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/accountants/registration",
                formData, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });
          

            setSuccess('Accountant add successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Accountant add unsuccessfull ' + error.response.data.message);
        }
    };

    return (
        <>
            {/* <SessionCheck /> */}
        
            
            <div className="pt-44 sm:ml-64">
            <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Registration
                                </h1>
       <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400"><span className="font-medium"> {success}</span></p>
      
              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label html-for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""
                            {...register('name', { required: true })}                
                                        />
{errors.name &&
        <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Name is required</span></p>
}
                  </div>
            <div>
                      <label html-for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                                        />
                                          {errors.email && (
                        <p>
                            {errors.email.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Email is required</span></p>

                                                    :
                                                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Invalid email address</span></p>
                                                }
                        </p>
                    )}
                  </div>
                  <div>
                      <label html-for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        type="password"
                        id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required=""
                        {...register('password', { required: true, pattern: /^\d+$/, minLength: 5 })}
                                        />
                                        {errors.password && (
                        <p>
                            {errors.password.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">password is required</span></p>
                                                :
                                                <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Invalid password pattern</span></p>

                                }
                        </p>
                    )}
                  </div>
                  
                          <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
                          <center>
               <div className="flex md:order-2">
     
          
      
           <Link href="/Accountants/homepage" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Homepage</Link>
          
               
          </div>
          </center>
              </form>
              
          </div>

      </div>
  </div>
                </section>
              
            </div>
            <Footer/> 
        </>
    );
}
