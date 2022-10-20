import React from "react";
import userStore from "../store/userStore";
import FormPatient from "../components/FormPatient";

const Home = () => {
	return (
		<div className="home">
			<h1>Home</h1>
			<p>
				Bienvenue {userStore.identifiant} avec id {userStore.userId} !
			</p>

			<FormPatient />
		</div>
	);
};

export default Home;
