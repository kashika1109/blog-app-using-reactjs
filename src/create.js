import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title,setTitle]= useState('');
  const [body,setBody]= useState('');
  const [author,setAuthor]= useState('mario');
  const [isPending,setIsPending]=useState(false)
  const history=useHistory()
  // we hve created an object history and it comes with several methods 

  const handleSubmit=(e)=>{
    e.preventDefault(); //default action of refreshing the pg
    const blog={title,body,author}
    setIsPending(true)

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers:{'Content-Type':"application/json"},
      body: JSON.stringify(blog) //turn into json string
    })
    .then(()=>{
      console.log('new blog added')
      setIsPending(false)
    })

    // history.go(-1); //go back by 1 pg 
    // history.go(1); //go forward by 1 pg 
    history.push('/') //push= redirecting to a page here home so we used route path '/'
  
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
         type="text" 
         required
         value={title} 
         onChange={(e)=> setTitle(e.target.value)}
         />
         <label>Blog Body:</label>
         <textarea
           required
           value={body}
           onChange={(e)=>setBody(e.target.value)}
         ></textarea>
         <label>Blog Author:</label>
         <select
         value={author}
         onChange={(e)=>setAuthor(e.target.value)}>
           <option value="mario"></option>
           <option value="yoshi"></option>
         </select>
         {!isPending && <button>Add Blog</button>}
         {isPending && <button disable>Adding Blog..</button>}
      </form>
    </div>
  );
}
 
export default Create;