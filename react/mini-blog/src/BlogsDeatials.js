import { useParams } from "react-router-dom"; 
import useFetch from "./useFetch";

const BlogsDetail = () => {
const {id} = useParams()
const {error,isPending,data:blog} = useFetch("http://localhost:8000/blogs/" + id);
	return ( 
		<div className="blog-details">
			<h2> Blog-Details - {id}</h2>
            { isPending &&<div> Loading</div>} 
            {error && <div> error </div>}
            {
                blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <div>{blog.body}</div>
                    </article>)}
		</div>
	 );
}
 
export default BlogsDetail;