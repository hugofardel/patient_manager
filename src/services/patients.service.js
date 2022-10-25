import axios from "axios";

export default new (class PatientsService {
	getListPatients() {
		return axios.get("http://localhost:8080/patients").then((res) => {
			return res.data;
		});
	}

	addPatient(data) {
		return axios
			.post("http://localhost:8080/patients", data)
			.then((res) => {
				return res.data;
			});
	}

	deletePatient(id) {
		return axios
			.delete(`http://localhost:8080/patients/patient/${id}/delete`)
			.then((res) => {
				return res.data;
			});
	}
})();
