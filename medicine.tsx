import React, {useEffect, useState} from "react";
import Layout from "./component/layout";
import { axiosInstance } from "../common/axios";


interface Medicine {
    id: number;
    medicineName: string;
    price: string;
    medicineGroup: string;
    status: string
}
export default function Medicine() {
    const [medicine, setmedicine] = useState<Medicine[]>([]);
    const [filtered, setfiltered] = useState<Medicine[]>([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        // Fetch diagnosis Listss data from API and set to state
        axiosInstance.get('accountants/medicine')
            .then(response => {
                setmedicine(response.data);
                setfiltered(response.data);
            })
            .catch(error => {
                console.error('Error fetching medicine list:', error);
            });
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        const filtered = medicine.filter(Medicine =>
            Medicine.medicineName.toLowerCase().includes(term.toLowerCase())
        );
        setfiltered(filtered);
    };

   

    return (
        <>
            <div className="grid grid-cols-12 ">


                <Layout />


                <div className="col-span-9">
                    <div className="container flex flex-col min-h-screen mx-auto ">

                        <h1 className="px-4 text-3xl font-semibold">Medicine List</h1>

                        <div className="flex-1">
                            <div className="p-4">
                                <form>
                                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by medicine name" value={searchTerm}
                                            onChange={handleSearch} required />
                                        <button type="submit"  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                    </div>
                                </form>
                                <table className="w-full my-2 text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-t-md">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">ID</th>
                                            <th scope="col" className="px-6 py-3">Medicine Name</th>
                                            <th scope="col" className="px-6 py-3">Medicine Group</th>
                                            <th  scope="col" className="px-6 py-3">Price</th>
                                            <th scope="col" className="px-6 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {medicine.map(Medicine => ( 
                                            <tr key={Medicine.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">{Medicine.id}</td>
                                                <td className="px-6 py-4">{Medicine.medicineName}</td>
                                                <td className="px-6 py-4">{Medicine.medicineGroup}</td>
                                                <td className="px-6 py-4">{Medicine.price} </td>
                                                <td className="px-6 py-4">{Medicine.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                      

                                       
                                
                                </div>
                            </div>

                        </div>
                    




            </div>
        
        </>
    )
}