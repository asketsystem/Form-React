import "./app.css"
import React, {useRef} from 'react'
import { useState } from "react/cjs/react.production.min";
import FormInput from "./components/FormInput";

const App = () => {
    // const [username,setUsername] = useState("")

    console.log("re-rendered")

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    };
    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <FormInput name="username" placeholder="Username" />
                <FormInput name="email" placeholder="Email"/>
                <FormInput name="fullname" placeholder="Full Name"/>
                <FormInput name="sth" placeholder="Sth else"/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default App;
