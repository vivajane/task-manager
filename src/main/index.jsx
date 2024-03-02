// import Card from '../categories/cards';
import TaskList from '../tasklist';
import styles from './main.module.css'
const Main = function ({children}) {
    return <div className={styles.mains}>{children}
        <TaskList/>
    
    {/* <Card>Daily Stand-up</Card>
    <Card>Team Meeting</Card>
    <Card>Attend Class</Card>
    <Card>Work on Convene Project</Card>
    <Card>Create Designs from Figma</Card>
    <Card>Complete Certification courses on Coursera </Card> */}

    </div>
}


export default Main;