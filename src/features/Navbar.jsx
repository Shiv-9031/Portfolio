import "../css/Navbar.css"
import {Link} from "react-router-dom"

const Navbar=()=>{

    const style={border:"2px ridge white",
                fontSize:"22px",    
                padding:"5px 10px",
                textDecoration: "none",
                borderRadius:"7px",
                color: "white",
                fontWeight: "550",
                
            
            }

    return(
        <div className="main">
            <div className="main-left">
                <h1>Portfolio</h1>
            </div>
            <div className="main-right">
                <Link to={"/"} style={style}>About</Link>
                <Link to={"/blog"} style={style}>Blog</Link>
                <Link to={"/projects"} style={style}>Projects</Link>
                <Link to={"/certificates"} style={style}>Certificates</Link>
            </div>
          
        </div>
    )
}
export default Navbar;

// <Link to={"/blog"}>Blog</Link>