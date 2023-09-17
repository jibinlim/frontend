import { Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Nobody's Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>




                {/* <a href="/">Home</a>
                <a href="/create" style={{ color:"white", backgroundColor:"#f1356d", borderRadius :"4px" }}>New Blog</a> */}

            </div>
        </nav>
      );
}
 
export default Navbar;
