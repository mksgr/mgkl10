import styles from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
	return <input {...props} className={styles["input"]} />;
};

export default Input;
