import { Switch, Route } from "react-router-dom";
import { ButtonPage } from "./ButtonPage";
import { ClickDisplayPage } from "./ClickDisplayPage";

export const Site = () => (
	<div>
		<Switch>
			<Route path="/button">
				<ButtonPage />
			</Route>
			<Route path="/number">
				<ClickDisplayPage />
			</Route>
			<Route path="/">
				<div>
					<h1> React test</h1>
					<p> by Jens Hulteberg</p>
				</div>
			</Route>
		</Switch>
	</div>
);
