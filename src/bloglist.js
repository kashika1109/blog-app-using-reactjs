import { Link } from "react-router-dom/cjs/react-router-dom.min";
const BlogList = ({blog,title}) => { //or you can write (props) and define const variables below see comments
    //const blogs=props.blog;
    //const title=props.title; 
    //console.log(props,blogs);
    //console.log(props,title);
    return ( 

        <div className="BlogList">
            <h2>{title}</h2>

            {blog.map(blog => (
             <div className="blog-preview" key={blog.id}>
                 <Link to={`/blogs/${blog.id}`} >
                 <h1>{blog.title}</h1>
                 <p>Written by {blog.author}</p>
                 </Link> 
             </div>
            ))}
        </div>
     );
}
 
export default BlogList;