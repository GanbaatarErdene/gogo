
const SignIn = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-teal-200">
            <div className="bg-white p-6 w-96">
                <from >
                    <h3 className="text-2xl font-semibold text-center mb-6">Sign In</h3>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2" htmlFor="">First Name</label>
                        <input
                            type="text"
                            className="border rounded p-1"
                            placeholder="First Name"
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
                            Sign In
                        </button>
                    </div>

                    <p className="forgot-password text-center p-3">
                    to register <a className="text-blue-500" href="">sign up?</a>
                    </p>

                    {/* <p className="forgot-password text-right">
                    <a href="">Sign Up</a>
                </p> */}

                </from>
            </div>
        </div>
    );
};

export default SignIn;