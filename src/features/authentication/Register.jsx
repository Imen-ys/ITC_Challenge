import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegestrationApi } from "../../Services/RegistrationApi";

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");

  const sanitizeInput = (value) => {
    return value.replace(/<[^>]*>?/gm, "").trim();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {

    if (!formData.fullName || !formData.email || !formData.role || !formData.password || !formData.confirmPassword) {
      setMessage("All fields are required");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return false;
    }

    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    const cleanedData = {
      fullName: sanitizeInput(formData.fullName),
      email: sanitizeInput(formData.email),
      role: sanitizeInput(formData.role),
      password: formData.password
    };

    try {

      const response = await RegestrationApi(cleanedData);

      setMessage("Account created successfully!");

      if (cleanedData.role === "client") {
        navigate("/client-dashboard");
      }

      if (cleanedData.role === "doctor") {
        navigate("/management");
      }

      setFormData({
        fullName: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: ""
      });

      console.log(response);

    } catch (error) {
      setMessage(error.message || "Registration failed");
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col">

      <header className="flex justify-between items-center px-6 py-4 bg-white border-b">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-blue-600 font-medium">
            <Link to="/">Log in</Link>
          </span>
        </p>
      </header>

      <div className="flex justify-center items-center flex-grow">

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-xl shadow-md w-full max-w-md"
        >

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-6">
            Please enter your details to register.
          </p>

          {message && (
            <div className="mb-4 text-red-500 text-sm">
              {message}
            </div>
          )}

          <label className="text-sm font-medium text-gray-700">
            Full Name
          </label>

          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-4 bg-gray-50">
            <User size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Dr. Jane Smith"
              className="bg-transparent outline-none w-full"
            />
          </div>

          <label className="text-sm font-medium text-gray-700">
            Email
          </label>

          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-4 bg-gray-50">
            <Mail size={18} className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="bg-transparent outline-none w-full"
            />
          </div>

          <label className="text-sm font-medium text-gray-700">
            Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 bg-gray-50 text-sm outline-none mb-4"
          >
            <option value="">Select role</option>
            <option value="client">Client</option>
            <option value="doctor">Doctor</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-gray-50">
                <Lock size={18} className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="********"
                  className="bg-transparent outline-none w-full"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-gray-50">
                <Lock size={18} className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="********"
                  className="bg-transparent outline-none w-full"
                />
              </div>
            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-medium transition"
          >
            Create Account →
          </button>

        </form>

      </div>

      <footer className="text-center text-gray-400 text-sm pb-6">
        © 2024 MedConnect Health Systems
      </footer>

    </div>
  );
}