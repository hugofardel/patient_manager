import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProtectedRoutes from "./components/ProtectedRoutes";
import userStore from "./store/userStore";
import Home from "./views/Home";
import ListPatients from "./views/ListPatients";
import Login from "./views/Login";

const App = observer(() => {
	return (
		<div className="app">
			<BrowserRouter>
				{userStore.isConnected()}
				{userStore.isConnected() && <Navigation />}
				<Routes>
					<Route exact path="/login" element={<Login />} replace />
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
			</BrowserRouter>
		</div>
	);
});

export default App;
