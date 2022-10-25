import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import PatientsService from "../services/patients.service";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListPatients = () => {
	const [patients, setPatients] = useState([]);
	const navigate = useNavigate();

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "firstname",
			headerName: "First name",
			minWidth: 130,
			flex: 1,
		},
		{ field: "lastname", headerName: "Last name", minWidth: 130, flex: 1 },
		{
			field: "age",
			headerName: "Age",
			type: "number",
			width: 90,
			align: "left",
			headerAlign: "left",
		},
		{
			field: "fullName",
			headerName: "Full name",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			minWidth: 160,
			flex: 1,
			valueGetter: (params) =>
				`${params.row.firstname || ""} ${params.row.lastname || ""}`,
		},
		{
			field: "actions",
			headerName: "Actions",
			sortable: false,
			width: 160,
			headerAlign: "center",
			align: "center",
			renderCell: (params) => (
				<div className="actions-icons">
					<button>
						<FontAwesomeIcon className="icon-pen" icon={faPen} />
					</button>
					<button onClick={() => deletePatient(params)}>
						<FontAwesomeIcon
							className="icon-trash"
							icon={faTrash}
						/>
					</button>
				</div>
			),
		},
	];

	useEffect(() => {
		let mounted = true;
		console.log("in useEffect");
		PatientsService.getListPatients().then((items) => {
			if (mounted) {
				fillPatientsData(items);
			}
		});
		return () => (mounted = false);
	}, []);

	const fillPatientsData = (patients) => {
		const tab = [];
		for (const index in patients) {
			let object = {
				id: patients[index].id,
				firstname: patients[index].firstname,
				lastname: patients[index].lastname,
				age: "45",
			};
			tab.push(object);
		}
		setPatients(() => tab);
	};

	const addPatient = () => {
		navigate("/patients/add");
	};

	const deletePatient = (params) => {
		const id = params.id;
		PatientsService.deletePatient(id).then((res) => {
			setPatients((prev) => (prev = res));
		});
	};

	return (
		<div className="page-list-patients">
			<h1>Liste des patients</h1>
			<div style={{ height: 400, width: "100%" }}>
				<DataGrid
					rows={patients}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					disableColumnMenu={true}
					getRowId={(row) => row.id}
					disableSelectionOnClick={true}
				/>
			</div>
			<div className="wrapper-button">
				<Button variant="contained" onClick={() => addPatient()}>
					+ patient
				</Button>
			</div>
		</div>
	);
};

export default ListPatients;
