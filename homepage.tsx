// generate boilerplate
import React from "react";
import Link from "next/link";
import Layout from "./component/layout";
import Footer from "./component/footer";

export default function HomePage() {

    return (

        <>
              <center>
            <div className="grid grid-cols-12 ">

            <Layout/>
               

                <div className="col-span-9 text-center bg-white overscroll-contain text-cyan-400">
                    <h1 className="">This is Accountants Dashboard</h1>
                </div>




            </div>

        

        
            </center>
            <Footer/>

        </>
    )
}
