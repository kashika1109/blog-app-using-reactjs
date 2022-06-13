import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    const {id}=useParams() 
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs/'+id)
    //allows us to grab parameters or wrap parameters from route right here
    const history=useHistory();
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+ blogs.id,{
            method: 'DELETE'
        })
        .then(()=>{
         history.push('/') //redirecting to homepage after delete
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <h4>Written by {blogs.author}</h4>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;