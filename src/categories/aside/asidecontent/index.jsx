import AnotherCard from '../anothercard';
import styles from './asidecontent.module.css';
const AsideContent = () => {
    return <div className={styles.asidecontent}>
        <AnotherCard>Completed</AnotherCard>
        <AnotherCard>In Progress</AnotherCard>
        <AnotherCard>Pending</AnotherCard>
        <AnotherCard>Urgent</AnotherCard>
       
    </div>
}

export default AsideContent;