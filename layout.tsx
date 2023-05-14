import React from "react";
import Link from "next/link";

const Layout = (props: any) => {
    return (
        <>
         <div className="col-span-3 overflow-y-scroll text-white bg-gray-900 divide-y-2 overscroll-behavior-y-auto ">
        <div className="flex justify-start px-3 py-4 my-4">
            <h1 className="px-4 py-4 text-3xl place-content-center">Medical Dashboard</h1>

        </div>


        <div>
<Link href="/Accountants/diagnosis" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray" >Diagnosis</Link >
<Link  href="/Accountants/medicine" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray">Medicine</Link >
<Link href="/Accountants/update" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray">Update</Link >
<Link  href="/Accountants/test" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray">Test</Link >
<Link  href="/Accountants/viewaccountants" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray">View Accountants</Link >
<Link  href="/Accountants/findaccountants" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray">Find Accountants</Link >
</div>

<div>
<Link  href="/Accountants/registration" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray">Registration</Link >
<Link  href="/Accountants/login" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray" >Login</Link >
<Link  href="/Accountants/accountantsprofile" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray">Accountants Profile</Link >
<Link  href="/Accountants/delete"className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray" >Delete </Link >
<Link  href="/Accountants/logout" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray" >Logout</Link >
</div>
<div>
<Link  href="/Accountants/contactus" className="flex items-center px-4 py-2 space-x-3 font-bold text-black-400 hover:text-gray">Contact Us</Link >
</div>

</div>


</>
)
}

export default Layout;