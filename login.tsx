// import React, { useState } from "react";
// import Layout from "./component/layout";
// import { useForm } from 'react-hook-form';
// import { SubmitHandler } from 'react-hook-form';
// import lgimage from '/public/image/login-p.jpg'
// import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
// import { axiosInstance } from '../common/axios';
// import { useRouter } from 'next/router';
// //import { redirect } from 'next/router';

// type LoginFormData = {
//   email: string;
//   password: string;
// };
// const Login = () => {
//   const router = useRouter();
//   const { register, handleSubmit } = useForm<LoginFormData>();
//   const [errors, setErrors] = useState('');

//   const onSubmit = async (data: LoginFormData) => {


//     //json stringify
//     const email = data.email;
//     const password = data.password;
//     console.log (email , password)

//     // call api and fetch data from " http://localhost:3005/patients/finduser" and match email password

//     // if match redirect to "http://localhost:3005/Patients/homepage"

//     // if not match show error message
//     try {
//       const response = await axiosInstance.post('/accountants/signin', {
//         email,
//         password
//       });

//       router.push('/Accountants/homepage');

//     } catch (error: any) {
//       console.log(error);
//       setErrors(error.response.data.message);

//     }


//   };





//   return (
//     <div className="flex flex-col min-h-screen md:flex-row">
     
//       <div className="flex items-center justify-center bg-gray-100 md:w-1/2">
//      { errors && <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded" role="alert">
//                     <strong className="font-bold">Error!</strong>
//                     <span className="block sm:inline">{errors}</span>
//                 </div> }
//         <form
//           className="max-w-sm p-8 bg-white rounded-lg shadow-md"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <h2 className="mb-4 text-2xl font-bold">Log in to your account</h2>
//           <div className="mb-4">
//             <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
//               Email 
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg"
//               type="email"
//               id="email"
//               {...register('email', { required: true })}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block mb-2 font-bold text-gray-700" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="w-full px-3 py-2 border rounded-lg"
//               type="password"
//               id="password"
//               {...register('password', { required: true })}
//             />
//           </div>
//           <button
//             className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
//             type="submit"
//           >
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from 'react'
import axios from 'axios'
import Layout from "./component/layout"
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const config = {
  headers: {
      'Content-Type': 'application/json'
  }
};




export default function Login() {

  const {register, formState: { errors }}= useForm({
    defaultValues:{
      email:'',
      password:''
    
    }
  
  });
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post("http://localhost:3000/accountants/signin", { email, password }, config)
      console.log("res: "+response.data)
      
        sessionStorage.setItem('email', response.data);
        router.push('/Accountants/homepage');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }
  }

 

    return (
        <>
           
   
            <div className="p-24 ">
        <section className="text-gray-600 body-font mx-auto w-96">
        <form onSubmit={handleSubmit}>
  
    <div className="bg-blue-300 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
      <div className="relative mb-4">
        <label html-for="email" className="leading-7 text-sm text-gray-600">Email</label>

        <input {...register("email", {required:true,  pattern: /\S+@\S+\.\S+/})} type="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={(e) => setEmail(e.target.value)} required=""  />
        {errors.email && (                  
           <p>
                            {errors.email.type === 'required'                                                     ?
                                                     <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Email is required</span></p>

                                                     :
                                                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Invalid email address</span></p>
                                                }
                       </p>
                  )}
                 
                </div>
      <div className="relative mb-4">
        <label html-for="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input {...register("password", {required:true, pattern: /^\d+$/, minLength: 5 })} type="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={password} onChange={(e) => setPassword(e.target.value)} required="" />
        {errors.password && (
                             <p>
                             {errors.password.type === 'required'                                                     ?
                                                     <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">password is required</span></p>
                                                :
                                                 <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Invalid password pattern</span></p>

                                 }
                        </p>
                    )}
                </div>
       <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Login</button>
                {error &&
                  <div>
                    
                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">{error}</span></p>
                  </div>
                }   
                </div>
          </form>
      
</section>

</div>
            </>
  )
}