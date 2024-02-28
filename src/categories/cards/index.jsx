import styles from './card.module.css'
const Card = ({children}) => {
    return <div className={styles.CardWrapper}>{children}</div>
}

export default Card;