import React, { useState, useEffect } from "react";
import Layout from "./component/layout";
import axios from 'axios';

interface Diagnosis {
    id: number;
    status:string;
}
export default function Diagnosis() {
    const [Diagnosis, setDiagnosis] = useState<Diagnosis[]>([]);
    const [filteredDiagnosis, setFilteredDiagnosis] = useState<Diagnosis[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
   

    useEffect(() => {
       
        axios.get('http://localhost:3000/accountants/diagnosis')
            .then(response => {
                setDiagnosis(response.data);
                setFilteredDiagnosis(response.data);
            })
            .catch(error => {
                console.error('Error fetching diagnosis:', error);
            });
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        const filtered = Diagnosis.filter(diagnosis =>
            diagnosis.status.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredDiagnosis(filtered);
    };

   

 
    return (
        <>
            <div className="grid grid-cols-12 mx-auto ">
                <Layout />
                <div className="col-span-9">
                    <div className="container flex flex-col min-h-screen mx-auto">

                        <h1 className="px-4 text-3xl font-semibold">Diagnosis</h1>

                        <div className="flex-1">
                            <div className="p-4">
                                <input
                                    type="text"
                                    className="w-full p-2 mt-4 border border-gray-300"
                                    placeholder="Search by Id"
                                    value={searchTerm}
                                    onChange={handleSearch}
                            />
                                <table className="w-full mt-4 table-auto">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">ID</th>
                                            <th className="px-4 py-2">Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Diagnosis.map(diagnosis => (
                                            <tr key={diagnosis.id}>
                                                <td className="px-4 py-2">{diagnosis.id}</td>
                                                <td className="px-4 py-2">{diagnosis.status}</td>
                                                
                                                
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
    );

}