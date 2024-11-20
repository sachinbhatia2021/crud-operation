import { Link } from 'react-router-dom';
import './navbar.css'
function Navbar(){

    return(<>
<nav className="navbox navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <b style={{color:"white"}} className='fs-2' >Ww..</b>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div  className="text  collapse navbar-collapse" id="navbarNav">
      <ul  className="navbar-nav">
        <li className="nav-item">

        </li>
        <li className="nav-item">
        <Link  to="/" className="nav-link text-light">Add users</Link>
       
        </li>
        <li className="nav-item">
        <div class="hover" style={{'color':'white',margin:'22px'}}>

        View users    <div class="hover-content">
    <Link  to="/viewusers" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right" className="nav-link text-light" >
after login
</Link>
    </div>
</div>




        </li>
        <li className="nav-item">
        <Link to="/login" className="nav-link text-light" >Login</Link>
          
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>)
}
export default Navbar;