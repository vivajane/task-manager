import AnotherCard from '../anothercard';
import styles from './asidecontent.module.css';
const AsideContent = () => {
    return <div className={styles.asidecontent}>
        <AnotherCard variant = "primary">Completed</AnotherCard>
        <AnotherCard variant = "secondary">In Progress</AnotherCard>
        <AnotherCard variant = "tertiary">Pending</AnotherCard>
        <AnotherCard variant = "high">Urgent</AnotherCard>
       
    </div>
}

export default AsideContent;