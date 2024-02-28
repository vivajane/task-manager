import AsideContent from '../asidecontent';
import styles from './asidecontainer.module.css'
const AsideContainer = () => {
    return <div className={styles.asidecontainer}>
        <h2>Categories</h2>
        <AsideContent></AsideContent>
    </div>
}


export default AsideContainer;