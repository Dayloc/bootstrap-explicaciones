import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					
				<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Menu
  </a>

  <ul class="dropdown-menu">
   				 <li className="ms-2"><Link to="/dflex">
					<span className="navbar-brand mb-0 h1">D-flex</span>
				</Link></li>

				<li className="ms-2"><Link to="/dFlexDirection">
					<span className="navbar-brand mb-0 h1">Flex-direction</span>
				</Link></li>
				<li className="ms-2"><Link to="/flexboxExamples">
					<span className="navbar-brand mb-0 h1">Alineación</span>
				</Link></li>
				
				
    
  </ul>
</div>
				</div>
			</div>
		</nav>
	);
};