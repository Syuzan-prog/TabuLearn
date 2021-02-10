import React from "react";
import 'fontsource-roboto';
import {
	Switch, Route, NavLink
} from 'react-router-dom';

import Root from "./components/Root";
import SignUp from "./components/app/SignUp"
import {routes} from './configs/Routes';
import LogIn from "./components/app/LogIn/LogIn";

function App() {
	return (
    <>
		<Switch>
			{/* <Route path={routes.home}>
				<Home />
			</Route> */}
			{/* <Route path={routes.root} component={Root}/> */}
			<Route path="/LogIn" component={LogIn}/>
			<Route path="/SignUp" component={SignUp}/>
		</Switch>
    </>
	);
}

export default App;
