import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
<div className="container-fluid">
<Link className="navbar-brand" to="/">
Job Tracker
</Link>
<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
aria-controls="navbarNav"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav">
<li className="nav-item">
<Link className="nav-link" to="/">
Home
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/add">
Add Job
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/jobs">
Job List
</Link>
</li>
</ul>
</div>
</div>
</nav>
);
}

export default Navbar;
