import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import PatientsService from "../../services/patients.service";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ListPatients = () => {
	const [patients, setPatients] = useState([]);
	const navigate = useNavigate();

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "fullName",
			headerName: "Patient",
			minWidth: 130,
			flex: 1,
			valueGetter: (params) =>
				`${params.row.firstname || ""} ${params.row.lastname || ""}`,
		},
		{
			field: "age",
			headerName: "Age",
			type: "number",
			minWidth: 90,
			align: "left",
			headerAlign: "left",
		},
		{
			field: "mail",
			headerName: "Mail",
			type: "mail",
			minWidth: 130,
			flex: 1,
		},
		{
			field: "telephone",
			headerName: "Téléphone",
			minWidth: 130,
			flex: 1,
		},
		{
			field: "status",
			headerName: "Status",
			minWidth: 130,
			flex: 1,
			align: "center",
			headerAlign: "center",
			renderCell: (params) => (
				<div
					className={`chips ${
						params.row.status === "alive" ? "alive" : "deceased"
					}`}
				>
					<span>{params.row.status}</span>
				</div>
			),
		},
		{
			field: "actions",
			headerName: "Actions",
			sortable: false,
			minWidth: 160,
			headerAlign: "center",
			align: "center",
			flex: 1,
			renderCell: (params) => (
				<div className="actions-icons">
					<button
						onClick={() =>
							navigate(`/patients/edit/${params.row.id}`)
						}
					>
						<FontAwesomeIcon className="icon-pen" icon={faPen} />
					</button>
					<button onClick={() => popinDeletePatient(params)}>
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

	const popinDeletePatient = (params) => {
		console.log(params);
		Swal.fire({
			title: "Attention!",
			text: "Êtes-vous sure de vouloir supprimer ce patient ?",
			icon: "warning",
			confirmButtonText: "Supprimer",
			showCancelButton: true,
			showConfirmButton: true,
			showCloseButton: true,
		}).then((res) => {
			if (res.value) {
				deletePatient(params);
			}
		});
	};

	const fillPatientsData = (patients) => {
		const tab = [];
		for (const index in patients) {
			let object = {
				id: patients[index].id,
				firstname: patients[index].firstname,
				lastname: patients[index].lastname,
				age: "45",
				status: patients[index].status,
				mail: patients[index].mail,
				telephone: patients[index].telephone,
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
		PatientsService.deletePatient(id)
			.then((res) => {
				setPatients((prev) => (prev = res));
				Swal.fire({
					title: "Suppression",
					text: "Suppression du patient réussie !",
					icon: "success",
				});
			})
			.catch(() => {
				Swal.fire({
					title: "Une erreur est survenue !",
					text: "Le patient n'a pas pu être supprimé.",
					icon: "error",
					showCloseButton: true,
					showConfirmButton: true,
					showCancelButton: false,
					confirmButtonText: "Ok",
				});
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
					+ Patient
				</Button>
			</div>
		</div>
	);
};

export default ListPatients;
