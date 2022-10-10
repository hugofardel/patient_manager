import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./views/Home";
import ListPatients from "./views/ListPatients";
import Login from "./views/Login";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navigation />
                <div className="container">
                    <Routes>
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

                        <Route path="/login" element={<Login />} replace />
                        <Route path="*" element={<Home />} replace />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
