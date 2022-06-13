//import { useState ,useEffect} from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs,isPending,error} =useFetch('http://localhost:8000/blogs'); //naming data as blogs  u cant write data also but do chnge the name at line 11
    return (
        <div className="homepage">
            {error && <div>ERROR</div>}
            {isPending && <div>Loading....</div> }
            {blogs && <BlogList blog={blogs} title="BLOGLIST" /> }
        </div>
      );
}
 
export default Home;

