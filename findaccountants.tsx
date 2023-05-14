import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AccountantsLayout from './component/accountantsdata'; 
import Layout from './component/layout';



export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    router.push({
      pathname: 'findaccountants',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
    
     
    
     
     <center>
     
      <form 
       className="max-w-sm p-8 bg-white rounded-lg shadow-md"
      onSubmit={handleFormSubmit}>
        <h2 className="mb-4 text-2xl font-bold">Find Accountants</h2>
        <div className="mb-4"> 
        <input  className="w-full px-3 py-2 border rounded-lg" type="text" value={inputValue} onChange={handleInputChange} />
        </div>
        <div>
        <button   className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700" type="submit">Get Data</button> <br></br> 
        </div>
        

      </form>
      
      

      {data.status == null? 
   <AccountantsLayout data={data}/>
      : data.status }
      
      </center>
    
    
    </>
  );
}


export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('http://localhost:3000/accountants/findone/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: { status: "enter valid user id"}
    }
  };
}
}