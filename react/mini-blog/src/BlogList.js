const BlogList = ({blogs,title,handleRemove}) => {
    return ( 
        <div className = "blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) =>(
                    <div className = "blog-preview">
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>{blog.author}</p>
                        <button onClick={() =>{handleRemove(blog.id)}}>Delete</button>
                        </div>
                ) )
            }
        </div>
     );
}
 
export default BlogList;