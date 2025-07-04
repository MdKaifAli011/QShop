import { useState } from "react";
import { toast } from "react-toastify";
import { AxiosInstance } from "../routes/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInputs = (data) => {
    let { username, email, password, confirmpassword } = data;

    if (username.trim() === "") {
      toast.error("username is a required input field");
      return false;
    } else if (username.trim().length < 6) {
      toast.error("username should be atleast 6 characters");
      return false;
    } else if (email.trim() === "") {
      toast.error("email is a required input field");
      return false;
    } else if (password.trim() === "") {
      toast.error("password is a required input field");
      return false;
    } else if (password.trim().length < 8) {
      toast.error("password should be atleast 8 characters");
      return false;
    } else if (password.trim() !== confirmpassword.trim()) {
      toast.error("password mismatch");
      return false;
    } else {
      return true;
    }
  };

  const register = async (e) => {
    e.preventDefault();
    if (!validateInputs(formData)) return;

    try {
      let resp = await AxiosInstance.post(`/users`, formData);
      console.log(resp);
      toast.success("Registered Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    // reset input fields
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <form className="shadow-2xl mt-16 p-6 rounded-xl bg-white min-w-[350px] w-full max-w-md border border-violet-100">
        <h3 className="text-center font-bold text-3xl text-black mb-3 tracking-wide">
          Register
        </h3>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="username"
            className="mb-1 text-black font-medium"
          >
            Username
          </label>
          <input
            type="text"
            className="border border-gray-300 outline-gray-700 px-3 py-2 rounded focus:ring-2 focus:ring-gray-200 transition-all"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-1 text-black font-medium">
            Email
          </label>
          <input
            type="email"
            className="border border-gray-300 outline-gray-700 px-3 py-2 rounded focus:ring-2 focus:ring-gray-200 transition-all"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="password"
            className="mb-1 text-black font-medium"
          >
            Password
          </label>
          <input
            type="password"
            className="border border-gray-300 outline-gray-700 px-3 py-2 rounded focus:ring-2 focus:ring-gray-200 transition-all"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label
            htmlFor="confirmpassword"
            className="mb-1 text-black font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="border border-gray-300 outline-gray-700 px-3 py-2 rounded focus:ring-2 focus:ring-gray-200 transition-all"
            name="confirmpassword"
            id="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
        </div>
        <div className="mb-3">
          <p className="text-center">Already have an account ? <Link to={"/login"} className="font-semibold">Login</Link></p>
        </div>
        <div>
          <button
            onClick={register}
            className="bg-black w-full py-2 rounded-lg text-white font-semibold shadow-md hover:from-violet-600 hover:to-violet-800 hover:scale-105 transition-all duration-200 text-lg"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
