import { useState,useEffect } from "react"
const useFetch=(url)=>{
    const [data,setData]=useState(null) //we hve chnged name from blogs to data since now we hve generalized any kind of data tht we need not only blogs
    const [isPending,setIsPending]=useState(true)
    const[error,setError]=useState(null)

    useEffect(()=>{
      const abortCont= new AbortController()
        setTimeout(()=>{
         fetch(url,{signal: abortCont.signal})
         .then(res=>{
           console.log(res)
           //res.ok //ok is a property to check whether response has come or not 
           //we need to check response once it comes back to check its status whether data has come or not for this we use ok func which is true or false
           if(!res.ok){
           throw Error('could not fetch the data for that resource')
           //throws error to catch which then prints this error message
           }
           return res.json() 
         })  
         .then(data=>{
           setData(data);
           setIsPending(false);
           setError(null)
         })
         .catch(err=>{
           if(err.name==='AbortError'){
             console.log('fetch aborted')
           }else{
           setError(err.message)
           setIsPending(false);
           }
           
         })
   
        },1000);

        return ()=> abortCont.abort();
       },[url]) //whenver url changes it will rerun this useFetch func to get data of that url

       return{
        data,isPending,error
       } 
       //return can be array,number,boolean,object anything
}

export default useFetch;