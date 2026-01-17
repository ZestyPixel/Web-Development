function handleFormSubmission(event){
    event.preventDefault(); //Prevents the default behavior of form submission which is to reload the page.
    console.log("Form Submitted");
}


export default function Form(){
    return(
        <form onSubmit={handleFormSubmission}>
            <input type="text" />
            <button>Submit</button>  
        </form>
    );
}