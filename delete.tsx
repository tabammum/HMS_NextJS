import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Link from 'next/link';



export default function Delete() {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const [inputValue, setInputValue] = useState();
    const router = useRouter();



    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        router.push({
            pathname: 'delete',
            query: { inputValue: inputValue }
        });
    }



    return (
        <>



            <center>
            <h1 className="mb-4 text-2xl font-bold">Delete Accountant </h1>
            {success}

            <form className="max-w-sm p-8 bg-white rounded-lg shadow-md"
            onSubmit={handleFormSubmit}>
                <div className="mb-4">
                <label  className="block mb-2 font-bold text-gray-700" htmlFor="id">Enter ID: </label> <></>
                <input  className="w-full px-3 py-2 border rounded-lg" type="text" value={inputValue} onChange={handleInputChange} />
                <br></br>
                </div>
                <div>
                <button   className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700" type="submit">Delete</button> <br></br>
               </div>
              <center>
               <div className="flex md:order-2">
     
          
      
           <Link href="/Accountants/homepage" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Homepage</Link>
          
               
          </div>
          </center>

            </form>
            </center>

        </>
    );
}

export async function getServerSideProps({ query }) {

    const inputValue = query.inputValue;
    try {
        const response = await axios.delete('http://localhost:3000/accountants/delete/' + inputValue);
        const data = await response.data;
        setSuccess("Deleted Successfuly")

        // return {
        //     props: {
        //         data
        //     }
        // };

    } catch (error) {
        // setError("Invalid ID")

        return {
            props: {
                data: { status: "enter valid user id" }
            }
        };

    }
}


