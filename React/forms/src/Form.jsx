import { useState } from "react";

export default function Form(){
    let [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    function handleSubmit(event){ //To prevent the default behavior of form submission which is to refresh the page.
        event.preventDefault();
        setFormData({
            username: "", //To reset the form after submission.
            password: ""
        });
    }

    function handleChange(event){
        let fieldName = event.target.name;
        let value = event.target.value;
        setFormData(
            (currObject)=>{
                return {...currObject, [fieldName]: value};
            }
        );
    }

    return(
    <form onSubmit={handleSubmit} action="">
        <label htmlFor="Form"><h1>Form</h1></label> <br/>
        <input type="text" placeholder="Enter username" value={formData.username} onChange={handleChange} id="Form" name="username"/> <br /> <br />
        <input type="password" placeholder="Password" value={formData.password} onChange={handleChange} name="password"/> <br /> <br />
        <button>Submit</button>
    </form>
    );
}