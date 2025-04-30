import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button className={styles["btn"]} {...props}>
			{children}
		</button>
	);
};

export default Button;
