import React from "react";
import userStore from "../store/userStore";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>
                Bienvenue {userStore.identifiant} avec id {userStore.userId} !
            </p>
        </div>
    );
};

export default Home;
