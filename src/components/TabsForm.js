import { useState } from "react";

const TabsForm = () => {
	const forms = ["PATIENT", "MEDECIN", "INTERVENANT"];
	const [currentForm, setCurrentForm] = useState(forms[0]);

	return (
		<div className="tabs-form">
			<div className="tabs-header">
				{forms.map((name, index) => {
					return (
						<div
							key={index}
							className={`tab ${
								name === currentForm ? "active" : ""
							}`}
						>
							<button
								onClick={() =>
									setCurrentForm(() => forms[index])
								}
							>
								{name}
							</button>
						</div>
					);
				})}
			</div>
			<div className="tabs-content">
				{currentForm === forms[0] && <p>PATIENT</p>}
				{currentForm === forms[1] && <p>MEDECIN</p>}
				{currentForm === forms[2] && <p>INTERVENANT</p>}
			</div>
		</div>
	);
};

export default TabsForm;
