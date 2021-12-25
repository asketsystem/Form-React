import "./app.css"
import React from 'react'
import { useState } from "react/cjs/react.production.min";

const App = () => {
    const [username,setUsername] = useState("")

    console.log(username);
    return <div className="app">
        <form>
            <FormInput placeholder="Username" setUsername={setUsername}/>
            <FormInput placeholder="Email"/>
            <FormInput placeholder="Full Name"/>
            <FormInput placeholder="Sth else"/>
        </form>
    </div>;
    
};

export default App;
