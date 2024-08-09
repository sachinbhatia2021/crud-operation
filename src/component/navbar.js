import './navbar.css'
function Navbar(){

    return(<>
<nav className="navbox navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <b className='fs-2' >Bhatia ji</b>
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
    <div className="text  collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Add users
          </a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </>)
}
export default Navbar;