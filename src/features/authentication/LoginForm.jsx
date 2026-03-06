import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <header className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg">+</div>
          <span className="font-semibold text-lg">HealthPortal</span>
        </div>

        <HelpCircle className="text-gray-500 cursor-pointer" />
      </header>

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Welcome Back</h1>

          <p className="text-gray-500 text-center mb-6 text-sm">
            Please enter your credentials to access the clinical dashboard.
          </p>

          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>

          <div className="flex items-center border rounded-lg mt-1 mb-4 px-3 py-2 bg-gray-50">
            <Mail size={18} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="doctor@hospital.com"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <div className="flex justify-between text-sm mb-1">
            <label className="font-medium text-gray-700">Password</label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 mb-6">
            <Lock size={18} className="text-gray-400 mr-2" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="bg-transparent outline-none w-full text-sm"
            />

            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              {showPassword ? (
                <EyeOff size={18} className="text-gray-400" />
              ) : (
                <Eye size={18} className="text-gray-400" />
              )}
            </button>
          </div>

          {/* Button */}
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-medium transition">
            Login to Dashboard →
          </button>

          {/* Request Access */}
          <p className="text-center text-sm text-gray-500 mt-6">
            New to HealthPortal?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 pb-6 space-x-4">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">HIPAA Compliance</a>

        <p className="mt-2">
          © 2024 HealthPortal Technologies Inc. Secure environment.
        </p>
      </footer>
    </div>
  );
}
