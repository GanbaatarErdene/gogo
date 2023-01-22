import { useForm} from "react-hook-form";
import { useRouter } from "next/router";
const SignIn = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        control,
        formState: { errors },
      } = useForm();
    const router = useRouter();

    const onSubmit = (formData) => {
        console.log(formData);
    }

    const onError = (err) => {
        console.log(err);
    }
    return (
        <div>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
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


                        {/* <p className="forgot-password text-right">
                        <a href="">Sign Up</a>
                    </p> */}

                </form>
            </div>
    );
};

export default SignIn;