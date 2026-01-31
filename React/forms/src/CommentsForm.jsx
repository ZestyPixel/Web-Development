import { useState } from "react";
import { Formik } from 'formik';

export default function CommentsForm({addComment}){
    let [comments, setComments] = useState({
        username: "",
        remarks: "",
        rating: 0
    });

    function handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        setComments(
            (currData)=>{
                return({...currData, [name]: value});
            }
        )
    }

    function handleSubmit(event){
        addComment(comments);
        event.preventDefault();
        setComments({
            remarks: "", //To reset the form after submission.
            rating: 0
        });
    }

    return(
        <div>
            <form action="">
                <h1>Comments</h1>
                <label htmlFor="username">Username:</label> <br />
                <input type="text" placeholder="Enter username" id="username" value={comments.username} onChange={handleChange} name="username" /> <br /> <br />
                <label htmlFor="remarks">Remarks:</label> <br />
                <input type="text" placeholder="Enter Comments" id="remarks" value={comments.remarks} onChange={handleChange} name="remarks"/> <br /> <br />
                <label htmlFor="rating">Rating:</label> <br />
                <input type="number" min={0} max={5} placeholder="5" id="rating" value={comments.rating} onChange={handleChange} name="rating"/> <br /> <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}