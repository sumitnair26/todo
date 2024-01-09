import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input style={
            {
                padding:10,
                margin:10
            }
        } type="text" id="title" placeholder="title"
        onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
        }}
        ></input> <br /> 
        <input style={
            {
                padding:10,
                margin:10
            }
        }type="text" id="description" placeholder="Description" 
        onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value)
        }}
        ></input> <br />
        <button style={
            {
                padding:10,
                margin:10
            }
        } onClick={()=>{
            fetch("http://localhost:3006/todo",{
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers: {
                    "content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add a todo</button> 
    </div>
}