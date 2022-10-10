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

    login(token, userId, identifiant, role) {
        this.token = token;
        this.userId = userId;
        this.identifiant = identifiant;
        this.isLogged = true;
        this.role = role;
    }

    logout() {
        this.token = null;
        this.userId = null;
        this.identifiant = null;
        this.isLogged = false;
        this.role = null;
    }
}

const userStore = new UserStore();
export default userStore;
