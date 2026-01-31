import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username cannot be empty';
   } else if (values.firstName.length > 15) {
     errors.firstName = 'Must be 15 characters or less';
   }

   return errors;
 };

export default function CommentsForm(){
    const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 0,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <p style={{color: "red"}}>{formik.errors.username ? <div>{formik.errors.username}</div> : null}</p>
                <h1>Comments</h1>
                <label htmlFor="username">Username:</label> <br />
                <input type="text" placeholder="Enter username" id="username" value={formik.values.username} onChange={formik.handleChange} name="username" /> <br /> <br />
                <label htmlFor="remarks">Remarks:</label> <br />
                <input type="text" placeholder="Enter Comments" id="remarks" value={formik.values.remarks} onChange={formik.handleChange} name="remarks"/> <br /> <br />
                <label htmlFor="rating">Rating:</label> <br />
                <input type="number" min={0} max={5} placeholder="5" id="rating" value={formik.values.rating} onChange={formik.handleChange} name="rating"/> <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}