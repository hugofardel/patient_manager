import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";

const FormPatient = () => {
	const formik = useFormik({
		initialValues: {
			firstname: "",
			lastname: "",
			birthdate: "",
			telephone: "",
			city: "",
			cp: "",
			rue: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className="form-patient">
			<form onSubmit={formik.handleSubmit}>
				<div className="form-identity-patient">
					<TextField
						id="add-patient-firstname"
						name="firstname"
						label="Firstname"
						className="field wd100"
						autoFocus
						variant="outlined"
						value={formik.values.firstname}
						onChange={formik.handleChange}
					/>

					<TextField
						id="add-patient-lastname"
						name="lastname"
						label="Lastname"
						className="field wd100"
						variant="outlined"
						value={formik.values.lastname}
						onChange={formik.handleChange}
					/>

					<TextField
						id="add-patient-birthdate"
						name="birthdate"
						label="Birthdate"
						className="field wd100"
						variant="outlined"
						value={formik.values.birthdate}
						onChange={formik.handleChange}
					/>

					<TextField
						id="add-patient-telephone"
						name="telephone"
						label="Telephone"
						className="field wd100"
						variant="outlined"
						value={formik.values.telephone}
						onChange={formik.handleChange}
					/>

					<TextField
						id="add-patient-rue"
						name="rue"
						label="Rue"
						className="field wd100"
						variant="outlined"
						value={formik.values.rue}
						onChange={formik.handleChange}
					/>

					<div className="address">
						<TextField
							id="add-patient-cp"
							name="cp"
							label="Code Postal"
							className="field wd30"
							variant="outlined"
							value={formik.values.cp}
							onChange={formik.handleChange}
						/>

						<TextField
							id="add-patient-city"
							name="city"
							label="City"
							className="field wd70"
							variant="outlined"
							value={formik.values.city}
							onChange={formik.handleChange}
						/>
					</div>
				</div>

				<Button variant="contained" type="submit">
					Valider
				</Button>
			</form>
		</div>
	);
};

export default FormPatient;
