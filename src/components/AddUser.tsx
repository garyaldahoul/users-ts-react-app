import React, { useState } from "react";
import {IState as Props} from "../App"
interface IProps{
    users: Props["users"]
    setUsers:React.Dispatch<React.SetStateAction<Props["users"]>>
}

const  AddUser: React.FC<IProps>=({users,setUsers})=>{

    const [input,setInput]=useState({
        name:"",
        age:"",
        img_url:"",
        note:"",
    });

    const handleChange =(e:React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>):void=>{
        setInput({...input,[e.target.name] : e.target.value})
    }

    const addUser =():void=>{
        if(
            !input.name || !input.age || !input.img_url
        ){return }

        setUsers([...users,{
            name:input.name,
            age:parseInt(input.age),
            url_img:input.img_url,
            note:input.note
        }]);

        setInput({
            name:"",
            age:"",
            img_url:"",
            note:"",
        })
    }
    return(
        <>
        <h1>Add User</h1>
        <input 
            type="text"
            name="name"
            value={input.name}
            placeholder="Name" 
            onChange={handleChange}/>
        <input 
            type="number" 
            name="age"
            value={input.age}
            placeholder="Age"
            onChange={handleChange}/>
        <input 
            type="text"
            name="img_url" 
            value={input.img_url}
            placeholder="Image-URL"
            onChange={handleChange}/>
        <textarea 
            name="note"
            value={input.note}
            placeholder="Note..."
            onChange={handleChange}/>
            <button onClick={addUser}>Add User</button>
        </>
    )
}

export default AddUser;