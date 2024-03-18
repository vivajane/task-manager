
import '../../src/App.css'
import Todo, { Header, ModalButton } from "./todolist/todo";
import { useState } from 'react';
const categories = [
    
    {
        id : 2,
        name: "Pray",
        description: "Invoke Abidoshaker",
        date:"Sunday"
    },
    {
        id : 1,
        name: "Sanitation",
        description: "Clean up the house",
        date : "Saturday",
    },
    {
        id : 4,
        name: "Attend Class",
        description: "Start class by 10am",
        date:"Tuesday"
    },
    {
        id : 5,
        name: "Work on Convene Project",
        description: "Work on the nav bar",
        date:"Wednesday"
    },
    {
        id : 6,
        name: "Learn React",
        description: "Learn the different react hooks",
        date:"Thursday"
    },
    {
        id : 3,
        name: "Teams Meeting",
        description: "Attend meeting on Capstone project",
        date:"Monday"
    },
    
]
const Home = function(){
    const [Fact, setFact] = useState(categories)
    const [showModal, setShowModal] = useState(false);
   
    return <div className='container'>
        {<ModalButton setShowModal = {setShowModal}/>}
       { showModal ? <Header setFact={setFact} setShowModal={setShowModal}/> : null}    
       <Todo Fact = {Fact} setFact={setFact}/>
    </div>
}

export default Home;