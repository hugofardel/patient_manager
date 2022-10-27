import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./components/AppBar";
import FormPatient from "./components/FormPatient";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./views/Home";
import ListPatients from "./views/patients/ListPatients";
import Login from "./views/Login";
import AddPatient from "./views/patients/AddPatient";
import EditPatient from "./views/patients/EditPatient";

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
									<AddPatient />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/patients/edit/:id"
							replace
							element={
								<ProtectedRoutes>
									<EditPatient />
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
