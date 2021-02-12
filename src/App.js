import React from "react";
import 'fontsource-roboto';
import {
	Switch, Route, NavLink
} from 'react-router-dom';

import Root from "./components/Root";
import SignUp from "./components/app/SignUp"
import {routes} from './configs/Routes';
import LogIn from "./components/app/LogIn";
import RecoverPassword from "./components/app/RecoverPassword";
import CreateNewPassword from "./components/app/CreateNewPassword";


function App() {
	return (
    <>
	<Root />
		<Switch>
			{/* <Route path={routes.home}>
				<Home />
			</Route> */}
			<Route path={routes.SignUp} component={SignUp}/>
			<Route path={routes.LogIn} component={LogIn}/>
			<Route path={routes.RecoverPassword} component={RecoverPassword}/>
			<Route path={routes.CreateNewPassword} component={CreateNewPassword}/>
		</Switch>
    </>
	);
}

export default App;
