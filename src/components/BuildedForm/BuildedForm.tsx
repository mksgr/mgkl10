import Input from "../Input/Input";
import { IFormConfig } from "./BuildedForm.types";

import Checkbox from "../Checkbox/Checkbox";
import Textarea from "../Textarea/Textarea";
import styles from "./BuildedForm.module.css";

const BuildedForm = ({ formConfig }: { formConfig: IFormConfig }) => {
	const isValid = Object.values(formConfig).every((value) => {
		const num = Number(value);
		return !isNaN(num) && num >= 0;
	});

	const isEmpty = Object.values(formConfig).every((value) => {
		const num = Number(value);
		return num === 0;
	});

	if (!isValid) return <p>Input data is not valid</p>;
	if (isEmpty) return <p>Empty form</p>;

	return (
		<form className={styles["form"]}>
			{[...Array(Number(formConfig.input))].map((el, i) => {
				return (
					<div key={`input - ${i}`} className={styles["form-group"]}>
						<label htmlFor="input">{`Input - ${i + 1}`}</label>
						<Input id="input" />
					</div>
				);
			})}
			{[...Array(Number(formConfig.textarea))].map((el, i) => {
				return (
					<div key={`textarea - ${i}`} className={styles["form-group"]}>
						<label htmlFor="textarea">{`Textarea - ${i + 1}`}</label>
						<Textarea id="textarea" />
					</div>
				);
			})}

			{[...Array(Number(formConfig.checkbox))].map((el, i) => {
				return (
					<div key={`checkbox - ${i}`} className={styles["form-group"]}>
						<label htmlFor="checkbox">{`Checkbox - ${i + 1}`}</label>
						<Checkbox id="checkbox" />
					</div>
				);
			})}
		</form>
	);
};

export default BuildedForm;
