import ButtonForm from "../buttonform"
import styles from './formact.module.css'
import { useState } from "react";

const FormAction = () => {
    return <div >
        <Form/>
        
    </div>
}

export const Form = () => {
    const[formState, setFormState] = useState({})
    const [formSubmit, setFormSubmit] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setFormState(formState);

    }
    const onChangeHandler = (e)  => {
        const name = e?.target?.name;
        const value = e?.target?.value;
        setFormState((prev) => ({
            ...prev,
            [name] :value,
        }));
        console.log(value);
        

    };
    return <form  onSubmit = {submitHandler}className={styles.formaction}>
        <TextField  value= {formState.item} name ="item" onChangeHandler = {onChangeHandler}id="item" placeholder="Add Task"/>
        <ButtonForm/>

    </form>
    
}
const TextField = ({label, id, placeholder,onChangeHandler, name, value,}) => {
    return <div className={styles.textfield}>
        <label htmlFor={id}>{label}</label>
        <input onChange={onChangeHandler} value = {value} name= {name} placeholder = {placeholder} id={id}/>
    </div>
}



export default FormAction;