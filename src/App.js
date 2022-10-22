import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./components/AppBar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./views/Home";
import ListPatients from "./views/ListPatients";
import Login from "./views/Login";

const App = observer(() => {
	return (
		<div className="app">
			<BrowserRouter>
				<PrimarySearchAppBar />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/login"
							element={<Login />}
							replace
						/>
						<Route
							path="/"
							replace
							element={
								<ProtectedRoutes>
									<Home />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/list-patients"
							replace
							element={
								<ProtectedRoutes>
									<ListPatients />
								</ProtectedRoutes>
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
});

export default App;
