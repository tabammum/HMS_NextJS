import React from "react";
import Layout from "./component/layout";
import Footer from "./component/footer";
import Link from "next/link";


export default function ContactUs() {
    return (
        <>


<div className="container my-24 px-6 mx-auto">

  
  <section className="mb-32 text-center text-gray-800">
    <div className="max-w-[700px] mx-auto px-3 lg:px-6">
      <h2 className="text-3xl font-bold mb-12">Contact us</h2>
      <form>
        <div className="form-group mb-6">
          <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
            placeholder="Name"/>
        </div>
        <div className="form-group mb-6">
          <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
            placeholder="Email address"/>
        </div>
        <div className="form-group mb-6">
          <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="exampleFormControlTextarea13" placeholder="Message"></textarea>
        </div>
        <div className="form-group form-check text-center mb-6">
          <input type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck87" checked/>
          <label className="form-check-label inline-block text-gray-800" html-for="exampleCheck87">Send me a copy of this
            message</label>
        </div>
        <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
          <center>
               <div className="flex md:order-2">
     
          
      
           <Link href="/Accountants/homepage" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Homepage</Link>
          
               
          </div>
          </center>
      </form>
    </div>
  </section>
  

</div>



</>
)
}