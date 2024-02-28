import styles from "./anothercard.module.css"
const AnotherCard = function ({children}) {
    return <div className={styles.anothercard}>{children}
    </div>
}

export default AnotherCard;