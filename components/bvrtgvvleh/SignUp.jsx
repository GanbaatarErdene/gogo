import Link from "next/link";

const SignUp = ({setIsRegister}) => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-teal-200">
            <div className="bg-white p-6 w-96">
                <from >
                    <h3 className="text-2xl font-semibold text-center mb-6">Sign Up</h3>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2" htmlFor="">First Name</label>
                        <input
                            type="text"
                            className="border rounded p-1"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2" htmlFor="">Last Name</label>
                        <input
                            type="text"
                            className="border rounded p-1"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2" htmlFor="">Email address</label>
                        <input
                            type="text"
                            className="border rounded p-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2" htmlFor="">Password</label>
                        <input
                            type="password"
                            className="border rounded p-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2" htmlFor="">Please retype your password</label>
                        <input
                            type="password"
                            className="border rounded p-1"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded-sm text-white">
                            Sign Up
                        </button>
                    </div>

                    <div className="forgot-password text-center p-3">
                        Already registered
                            <button onClick={setIsRegister(true)} className="text-blue-500">sign in?</button>
                    </div>

                </from>
            </div>
        </div>
    );
};

export default SignUp;