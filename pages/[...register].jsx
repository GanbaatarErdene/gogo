import SignUp from "@/components/register/SignUp";
import SignIn from "@/components/register/SignIn";
import { useState } from "react";

const Medee = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-teal-200">
      <div className="bg-white p-6 w-96 rounded-lg">
        {isRegister ? <SignIn /> : <SignUp />}
        <p className="text-center p-3">
          {isRegister ? "to register " : "Already registered "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-500"
          >
            {isRegister ? "Sign up " : "Sign in "}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Medee;
