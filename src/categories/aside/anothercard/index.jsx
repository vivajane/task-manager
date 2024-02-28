import styles from "./anothercard.module.css"
const AnotherCard = function ({variant, children}) {
    return <div data-variant = {variant} className={styles.anothercard}> {children}</div>
}

    
   
export default AnotherCard;