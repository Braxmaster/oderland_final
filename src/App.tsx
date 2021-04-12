import "./App.css";
import store from "./store";
import { Site } from "./Site";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
	return (
		<Router>
			<nav>
				<ul className="navGrid">
					<NavLink exact={true} to="/" activeClassName="isActive">
						Home
					</NavLink>
					<NavLink to="/button" activeClassName="isActive">
						Increment button
					</NavLink>
					<NavLink to="/number" activeClassName="isActive">
						Number of clicks
					</NavLink>
				</ul>
			</nav>
			<div className="content">
				<Provider store={store}>
					<Site />
				</Provider>
			</div>
		</Router>
	);
}

export default App;
