import styles from "./todolist.module.css";
import { useState } from "react";


const Days = [
    {
        id: 1,
        name : "Monday",
    },
    {
        id: 2,
        name : "Tuesay",
    },
    {
        id: 3,
        name : "Wednesday",
    },
    {
        id: 4,
        name : "Thursday",
    },
    {
        id: 5,
        name : "Friday",
    },
    {
        id: 6,
        name : "Saturday",
    },
    {
        id: 7,
        name : "Sunday",
    },
]

export const ModalButton = ({setShowModal}) => {
    return <span className={styles.btnspan}>
        <button onClick={() => setShowModal(true)} className={styles.btntwo} >Set Your Todo-List</button>
    </span>
}



const Todo = function({Fact, setFact}){
    const deleteByIndex = index => {
       
        setFact(oldValues => {
            return oldValues.filter((_, i) => i !== index,window.alert("Once deleted, can't be undone, sure?"))
            
        })}

    
    return <section className={styles.section}>
        <ul>
            {
                Fact.map((category, index) => {
                    return <li  style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} key={category.id}>
                        <p>{category.name}</p>
                    <span style={{margin: "3px",border: "1px solid black", padding: "10px"}}>{category.description}</span>
                    <span style={{margin: "4px" , border: "1px solid black", padding: "10px"}}>{category.date}</span>
                    <div style ={{padding: "10px"}} >
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    </div>
                    <div className={styles.btn}><button onClick={() => deleteByIndex(index)} style={{padding:"5px"}} >Delete</button>
                    <button style={{padding:"5px"}}>Edit</button>
                    </div>
                    </li>
                })
            }
        </ul>

    </section>
}

export default Todo;


export const Header = function({setFact, setShowModal}){
    const [formValues, setFormValues] = useState("");
    const [formValuesOne, setFormValuesOne] = useState("");
    const [formValuesTwo, setFormValuesTwo] = useState("");
    const newCount = formValues.length;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(formValues, formValuesOne, formValuesTwo)
        if(formValues && formValuesOne && formValuesTwo === ""){
            alert("Kindly fill up")
        } else if (newCount >= 50){
            alert("Limit exceeded")
        }
        else {
        const newValues = {
            id: Math.round(Math.random() * 10000000),
            formValues,
            formValuesOne,
            formValuesTwo,
        }
        setFact((Fact) => [newValues, ...Fact])
        setFormValues("");
        setFormValuesOne("");
        setFormValuesTwo("");

        setShowModal(false)
        
      }


    }
    return <header>
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={formValues}  placeholder="Add Task" onChange={(e) => setFormValues(e.target.value)} />
            <span style={{padding: "10px", height:'40px',}} ><p>{200 -newCount}</p></span>
            <input type="text" value={formValuesOne} placeholder="Description"  onChange={(e) => setFormValuesOne(e.target.value)}  />
            <select name="select" value={formValuesTwo} onChange={(e) => setFormValuesTwo(e.target.value)}  >
                <option value="">Select Date</option>

                {
                    Days.map((day) =>
                    <option key={day.id} value={day.name}>{day.name}</option>
                    )
                }
            </select>
            <div><button>ADD</button></div>
        </form>

    </header>
}