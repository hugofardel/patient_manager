import { makeAutoObservable } from "mobx";

class UserStore {
	token = null;
	userId = null;
	identifiant = null;
	isLogged = false;
	role = null;

	constructor() {
		makeAutoObservable(this);
	}

	isConnected() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user?.token) {
			return true;
		}
		return false;
	}

	login(token, userId, identifiant, role) {
		this.token = token;
		this.userId = userId;
		this.identifiant = identifiant;
		this.isLogged = true;
		this.role = role;
		localStorage.setItem("user", JSON.stringify({ token, userId, role }));
	}

	logout() {
		this.token = null;
		this.userId = null;
		this.identifiant = null;
		this.isLogged = false;
		this.role = null;
		localStorage.clear();
	}
}

const userStore = new UserStore();
export default userStore;
