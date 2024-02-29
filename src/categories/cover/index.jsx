
import Main from "../../main";
import AsideContainer from "../aside/asidecontainer";


import styles from './cover.module.css'
const Cover = () => {
    return <div className={styles.covers}>
        <AsideContainer></AsideContainer>
       
        <Main><h3>WEEKLY TASKS</h3></Main>
        

    </div>
}

export default Cover;