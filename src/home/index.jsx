
import Categories from "../categories/categorycontent";
import FormAction from "../form/formact";
// import TaskList from "../tasklist";
import '../../src/index.css'



const Home = () => {
    return (
        <div className="container">
        <FormAction/>
        <Categories></Categories>
        {/* <TaskList/> */}
        </div>
    )
}

export default Home;