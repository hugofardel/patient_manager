import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormPatient from "../../components/FormPatient";
import patientsService from "../../services/patients.service";

const EditPatient = () => {
	const [data, setData] = useState(null);
	const params = useParams();

	useEffect(() => {
		console.log("in useEffect data");
		patientsService.getPatient(params.id).then((res) => {
			setData(() => res);
			console.log(res);
		});
	}, [params.id]);

	return <FormPatient data={data} mode="edit" />;
};

export default EditPatient;
