import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { ROUT_ELEMENTS } from "./config";


const App = () => {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					{ROUT_ELEMENTS.map(({component: Component, exact, path}) => (
						<Route key={path} element={<Component />} exact={exact} path={path} />
					))}
				</Routes>
			</Main>
		</>
	);
}

export default App;
