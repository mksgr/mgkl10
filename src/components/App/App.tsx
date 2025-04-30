import FormPage from "../../pages/FormPage/FormPage";
import HomePage from "../../pages/HomePage/HomePage";

import styles from "./App.module.css";

function App() {
	const path = window.location.pathname;
	return (
		<div className={styles["wrapper"]}>
			{path === "/" && <HomePage />}
			{path === "/form" && <FormPage />}
		</div>
	);
}

export default App;
