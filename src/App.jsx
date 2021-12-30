import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
     const [values, setValues] = useState({
         username:"",
         email:"",
         birthday:"",
         password:"",
         confirmPassword:"",
     });

     const inputs = [
         {
             id:1,
             name:"username",
             type:"text",
             errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
             placeholder:"Username",
             label:"Username",
             pattern: "^[A-Za-z0]{3,16}$",
             required:true
         },
         {
             id:2,
             name:"email",
             type:"email",
             errorMessage:"It should br a valid email address!",
             placeholder:"Email",
             label:"Email",
             required:true,
         },
         {
             id:3,
             name:"birthday",
             type:"date",
             placeholder:"Birthday",
             label:"Birthday"
         },
         {
             id:4,
             name:"password",
             type:"password",
             errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
             placeholder:"Password",
             pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}&`,
             label:"Password",
             required:true
         },
         {
             id:5,
             name:"confirmPassword",
             type:"password",
             errorMessage:"Password don't match!",
             placeholder:"Confirm Password",
             label:"Confirm Password",
             pattern: values.password,
             required:true,
         },
     ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

     const onChange = (e) => {
         setValues({ ...values, [e.target.name]: e.target.value });
     };


     console.log(values);
    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]}  onChange={onChange}/>
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default App;
