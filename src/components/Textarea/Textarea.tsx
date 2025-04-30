import styles from "./Textarea.module.css";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaProps> = (props) => {
	return <textarea {...props} className={styles["textarea"]} />;
};

export default Textarea;
