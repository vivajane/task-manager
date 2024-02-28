import styles from "./btn.module.css"
const Button = () => {
    return <div className={styles.btn}>
        <button>Delete</button>
        <button>Edit</button>
    </div>
}

export default Button;