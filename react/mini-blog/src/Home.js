// // import { useEffect, useState } from "react"; 
// // import BlogList from "./BlogList";

// // const Home = () => {
// //  const [blogs, setBlog] = useState(null);
// //  const [isPending, setIsPending] = useState(true);
// //  const [error,setError] = useState(null);

// // const handleDelete = (id)=>{
// //   const newBlogs = blogs.filter((blog)=> blog.id !==id );
// //   setBlog(newBlogs)
// // }

// // useEffect(()=>{

// //     setTimeout(() =>{
// //         fetch("http://localhost:8000/blogs").then(res =>{
// //             return res.json()
// //         }).then(data =>{
// //             setBlog(data);
// //             setIsPending(false);
// //         }).catch(err => {
// //             console.log(err.message);
// //         })
// //     }, 2000)
// // //   fetch(' http://localhost:8000/blogs').then(res => {
// // //     return res.json()
// // //   }).then(data =>{ 
// // //     console.log(data)
  
// // //   })
// // },[]);
// import { useEffect, useState } from "react"; 
// import BlogList from "./BlogList";

// const Home = () => {
//  const [blogs, setBlog] = useState(null);
//  const [isPending, setIsPending] = useState(true);
//  const [error, setError] = useState(null)

//  useEffect(()=>{
//    setTimeout( ()=>{
//     fetch('http://localhost:8000/blogs')
//     .then(res => {
//       if(!res.ok){
//         throw Error('데이터를 불러올 수 없습니다 ')
//       }
//       return res.json()})
//     .then(data =>{ 
//         setBlog(data);
//         setIsPending(false);
//         setError(null)
//       })
//     .catch(err =>{
//       setIsPending(false);
//       setError(err.message);
//     })
//     } , 1000);
// },[]);
//  return ( 
//   <div className="home">
 
//     {error && <div> {error} </div>}
//     {isPending && <div>Loading... </div>}
//     { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
//   </div>
//  );
// }
// export default Home;
 

// // const Home = () => {
// //     const [blogs, setBlog] = useState([
// //         {title : 'my article 1', body :'1 lorem ipsum...', author:'Hong', id:1},
// //         {title : 'my article 2', body :'2 lorem ipsum...', author:'Kim' , id:2},
// //         {title : 'my article 3', body :'3 lorem ipsum...', author:'Lee' , id:3}
// //        ]);
// //     const handleDelete = ((id) => {
// //         const newBlogs = blogs.filter((blog) => blog.id !== id);
// //         setBlog(newBlogs);
// //     })

// //     const [name,setName] = useState('Kim');
// //     useEffect( () =>{
// //         console.log('useEffect');
// //     })


// //     return ( 
// //         <div>
// //             <BlogList blogs = {blogs} title = "All Blogs" handleRemove ={handleDelete}/>
// //             <button onClick={ () => setName('Smith')}>Change Name</button>
// //             <p>{name}</p>
// //         </div>
// //      );
// // }
 
// // export default Home;

import BlogList from "./BlogList";
import useFectch from "./useFetch";

const Home = () => {
 const {data, isPending, error} = useFectch("http://localhost:8000/blogs");
 return ( 
  <div className="home">
    { error && <div>{error} </div>}
    { isPending && <div> Loading... </div>}
    { data && <BlogList blogs={data} title="All Blogs!"  /> }
  </div>
 );
}
export default Home;