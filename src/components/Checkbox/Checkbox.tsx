import styles from "./Checkbox.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<InputProps> = (props) => {
	return (
		<div className={styles["checkbox-wrapper"]}>
			<input {...props} type="checkbox" />
		</div>
	);
};

export default Checkbox;
