import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useInsertUsers from "hooks/useInsertUsers";
import dayjs from "dayjs";

const SignUp = () => {
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
    console.log("formdata-------->", formData);
    if (formData.password == formData.rePassword) {
      useInsertUsers({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        registerDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      });

      reset(); //clean form
    } else {
      console.log("Burtgehed aldaa garlaa");
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const mainForm = [
    { label: "First Name", type: "text", name: "firstName" },
    { label: "Last Name", type: "text", name: "lastName" },
    { label: "Email Address", type: "email", name: "email" },
    { label: "Password", type: "password", name: "password" },
    { label: "Retype Password", type: "password", name: "rePassword" },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="form">
        <h3 className="text-2xl font-semibold text-center mb-6">Sign Up</h3>
        {mainForm.map((element, index) => {
          return (
            <div className="flex flex-col mb-4">
              <label className="mb-2">{element.label}</label>
              <input
                type={element.type}
                {...register(`${element.name}`, {
                  required: true,
                  maxLength: 40,
                })}
                className="border rounded p-1"
                placeholder={element.label}
              />
            </div>
          );
        })}
        <div className="flex flex-col mb-4">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label"> Remember me</label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded-sm text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
