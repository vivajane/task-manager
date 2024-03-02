import styles from "./tasklist.module.css"
const TaskList = () => {
    return <>
    <div className={styles.CardWrapper}>
        <ul >
            <li>Team Meeting</li>
            <li>Attend Class</li>
            <li>Work on Convene Project</li>
            <li>Create Designs from Figma</li>
        </ul>

    </div>


    </>
       
    
}

 

export default TaskList;