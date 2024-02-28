import Button from '../../button';
import styles from './card.module.css'
const Card = ({children}) => {
    return <div className={styles.CardWrapper}>{children}
    <Button></Button>
    </div>
}

export default Card;