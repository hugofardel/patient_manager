import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userStore from "../store/userStore";

const Navigation = () => {
	const navigate = useNavigate();

	const logout = () => {
		userStore.logout();
		navigate("/login");
	};

	return (
		<nav className="navigation">
			<ul>
				<li>
					<NavLink to="/">Dernières transmissions</NavLink>
				</li>
				<li>
					<NavLink to="/list-patients">Liste des patients</NavLink>
				</li>
				<li>
					<NavLink to="/aides-soignantes">
						Liste des aides soignantes
					</NavLink>
				</li>
				<li onClick={logout}>Deconnexion</li>
			</ul>
		</nav>
	);
};

export default Navigation;
