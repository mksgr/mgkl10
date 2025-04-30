import styles from "./FormPage.module.css";

import { useState } from "react";
import BuildedForm from "../../components/BuildedForm/BuildedForm";
import { IFormConfig } from "../../components/BuildedForm/BuildedForm.types";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const FormPage = () => {
	const [isBuild, setIsBuild] = useState(false);
	const [formConfig, setFormConfig] = useState<IFormConfig>({
		input: "",
		textarea: "",
		checkbox: ""
	});

	const resetBuilder = () => {
		setIsBuild(false);
		setFormConfig({
			input: "",
			textarea: "",
			checkbox: ""
		});
	};

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormConfig((prevState) => {
			return {
				...prevState,
				[name]: value
			};
		});
	};

	return (
		<div className={styles["main"]}>
			<div className={styles["title"]}>Form Builder</div>
			{!isBuild && (
				<div className={styles["wrapper"]}>
					<div className={styles["input"]}>
						<label htmlFor="input"> Enter number of inputs:</label>
						<Input
							min={0}
							id="input"
							name="input"
							type="number"
							value={formConfig.input}
							onChange={inputHandler}
						/>
					</div>
					<div className={styles["input"]}>
						<label htmlFor="textarea"> Enter number of textareas:</label>
						<Input
							min={0}
							id="textarea"
							name="textarea"
							type="number"
							value={formConfig.textarea}
							onChange={inputHandler}
						/>
					</div>
					<div className={styles["input"]}>
						<label htmlFor="input"> Enter number of checkbox:</label>
						<Input
							min={0}
							id="checkbox"
							name="checkbox"
							type="number"
							value={formConfig.checkbox}
							onChange={inputHandler}
						/>
					</div>
				</div>
			)}

			{!isBuild && <Button onClick={() => setIsBuild(true)}>Build</Button>}

			{isBuild && <BuildedForm formConfig={formConfig} />}
			{isBuild && <Button onClick={resetBuilder}>Build again</Button>}
		</div>
	);
};

export default FormPage;
