import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./components/AppBar";
import FormPatient from "./components/FormPatient";
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
							path="/patients"
							replace
							element={
								<ProtectedRoutes>
									<ListPatients />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/patients/add"
							replace
							element={
								<ProtectedRoutes>
									<FormPatient />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/patients/:id"
							replace
							element={
								<ProtectedRoutes>
									<FormPatient />
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
