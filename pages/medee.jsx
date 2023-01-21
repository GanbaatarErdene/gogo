import SignUp from "@/components/bvrtgvvleh/SignUp";
import SignIn from "@/components/newtreh/SignIn";
import { useState } from "react";

const Medee = () =>{
    const [isRegister, setIsRegister] = useState(false)
    return(
        <div>
            {
               if (isRegister) {return <SignIn/>} 
               else {<SignUp setIsRegister = {setIsRegister} />} 
            }
        </div>
    );
};

export default Medee;