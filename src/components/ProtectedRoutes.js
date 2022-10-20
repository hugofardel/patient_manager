import React from "react";
import { Navigate } from "react-router-dom";
import userStore from "../store/userStore";

const ProtectedRoutes = ({ children }) => {
	if (!userStore.isConnected()) {
		return <Navigate to="/login" replace />;
	}
	return children;
};

export default ProtectedRoutes;
