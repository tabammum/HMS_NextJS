
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};



export default function Update() {
    
    const [name, setName] = useState('')
    const [inputValue, setinputValue] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(name)
        console.log(inputValue)

        try {
            const response = await axios.put("http://localhost:3000/accountants/update" +inputValue, {name} ,config)
            // console.log("res: " + response.data)
            // console.log("update successful")
            console.log("success22: " + success)
            setSuccess("Updated Successfully")



            sessionStorage.setItem('name', response.data);
            


        } catch (error) {
            console.log("error22: " + error)
            setError("invalid login")
            
        }
    }



    return (
        <>

          <center>
            <div>
                <section>
                    {success}
                    <form  className="max-w-sm p-8 bg-white rounded-lg shadow-md"
                    onSubmit={handleSubmit}>

                        <div >
                            <h2 className="mb-4 text-2xl font-bold">Update Accountant</h2>
                            <div className="mb-4">
                                <label className="block mb-2 font-bold text-gray-700" html-for="name" >Name: </label>

                                <input className="w-full px-3 py-2 border rounded-lg" type="name" value={name} onChange={(e) => setName(e.target.value)} />

                            </div>
                            <br></br>
                            <div className="mb-4"  >
                                <label  className="block mb-2 font-bold text-gray-700" html-for="id" >ID: </label>
                                <input className="w-full px-3 py-2 border rounded-lg" type="id" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />

                            </div>
                            <button  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700" type="submit" >Submit</button>
                            {error &&
                                <div>

                                    <p ><span >{error}</span></p>
                                </div>
                            }
                            <br></br>


                        </div>
                        <center>
               <div className="flex md:order-2">
     
          
      
           <Link href="/Accountants/homepage" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Homepage</Link>
          
               
          </div>
          </center>


                    </form>

                </section>



            </div>
            </center>
        </>
    )
}