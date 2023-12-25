import {React, useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
 
function Github() {
    const data = useLoaderData();
    

    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ManishkvermaHTML')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     });
    // },[]);
        
  return (
    <>
    <div className='bg-slate-500 text-white text-center p-4 text-2xl font-semibold'>
       <p>Github followers :{data.followers}</p>
       <img src={data.avatar_url} alt="githu_profile_img" width={300} /> 
    </div>
    </>
  )
}

export default Github

export const gitLoader = async() =>{
   const response = await fetch('https://api.github.com/users/ManishkvermaHTML');
   return response.json();
}