import { Outlet, Link} from "react-router-dom";
import "./index.css";
const Layout = () => {
	const style = {
		color:"white",
		textDecoration:"none",
		textAlign:"center",
		backgroundColor:"#333",
		fontSize:"30px",
		padding:"10px",
		borderRadius:"5px"
	}
	return(
		<>
		<nav>
			<ul>
				<li>
					<Link to="/" style={style}>Login</Link>
				</li><br/><br/>
				<li>
					<Link to="/contact" style={style}>Register</Link>
				</li><br/>
			</ul>
		</nav>
	<Outlet />
	</>
		)
}
export default Layout;