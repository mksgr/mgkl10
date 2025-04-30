import Button from "../../components/Button/Button";
import styles from "./HomePage.module.css";

const HomePage = () => {
	const redirectHandler = () => {
		window.location.href = "/form";
	};
	return (
		<div className={styles["main"]}>
			<div className={styles["text"]}>
				Click this button to open the form builder
			</div>
			<Button onClick={redirectHandler}>FORM</Button>
		</div>
	);
};

export default HomePage;
