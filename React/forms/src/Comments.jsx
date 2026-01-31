import CommentsForm from "./CommentsForm";
import { useState } from "react";
import FormikForm from "./FormikForm";

export default function Comment(){
    let [comments, setComments] = useState([{
        username: "umar",
        remarks: "great",
        rating: 4
    }]);

    function addComment(comment){
        setComments((currComments)=>{
            return [...currComments, comment];
        });
    }

    return(
        <>
        <CommentsForm addComment={addComment}/> We have to pass the function as a prop to the child component because the state is maintained here 
        in the parent component. So that when a new comment is added from the child component, it can call this function to update the state in the parent component 
        as it does not happen automatically.
        <div>
            <h1>All Comments</h1>
            {comments.map((comment)=>(
                <div>
                    <span>-----------------------------------</span> <br />
                    <span>Username: {comment.username}</span> <br />
                    <span>Remarks: {comment.remarks}</span> <br />
                    <span>Rating: {comment.rating}</span> <br />
                </div>
            ))}
        </div>
        <h1>Formik Comment Form</h1>
        <FormikForm addComment={addComment}/>
        </>
    );
}
