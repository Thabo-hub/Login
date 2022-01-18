

import { Outlet, Link} from 'react-router-dom';
const Style = {
	textAlign:"center",
	color:"white",
	textDecoration:"none",
	margin:"20px",
	fontSize:"20px",
	backgroundColor:"black",
	padding:"10px",
	borderRadius:"10px"
};
const Layout = () => {
		return(
				<>
				<nav style={{textAlign:"center"}}>
				<Link to="/" style={Style}>Login</Link>
				<Link to="register" style={Style}>Register</Link>
				</nav><br/>
				<Outlet />
				</>
			);
}
export default Layout;