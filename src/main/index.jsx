import Card from '../categories/cards';
import styles from './main.module.css'
const Main = function () {
    return <div className={styles.mains}>
    
    <Card>Daily Stand-up</Card>
    <Card>Team Meeting</Card>
    <Card>Attend Class</Card>
    <Card>Work on Convene Project</Card>
    <Card>Create Designs from Figma</Card>
    <Card>Complete Certification courses on Coursera </Card>

    </div>
}


export default Main;