import { User, Mail, Lock, ShieldCheck, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg font-bold">
            +
          </div>
          <h1 className="font-semibold text-lg">MedConnect</h1>
        </div>

        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer font-medium">
            <Link to="/">Log in</Link>
          </span>
        </p>
      </header>

      {/* MAIN */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
          {/* LEFT PANEL */}
          <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 leading-snug">
                Join the future of <br />
                <span className="text-blue-700">Medical Healthcare.</span>
              </h2>

              <p className="text-gray-600 mt-4">
                Connect with specialists, manage patient records, and streamline
                your clinical workflow in one secure platform.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <ShieldCheck className="text-blue-600" size={20} />
                  HIPAA Compliant Security
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="text-blue-600" size={20} />
                  Professional Networking
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <BarChart3 className="text-blue-600" size={20} />
                  Advanced Health Analytics
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-10">
              Trusted by over 10,000+ medical professionals worldwide.
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-10">
            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>

            <p className="text-gray-500 mb-6">
              Please enter your details to register.
            </p>

            {/* FULL NAME */}
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>

            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-4 bg-gray-50">
              <User size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Dr. Jane Smith"
                className="bg-transparent outline-none w-full"
              />
            </div>

            {/* EMAIL */}
            <label className="text-sm font-medium text-gray-700">
              Work Email Address
            </label>

            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-4 bg-gray-50">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="jane.smith@hospital.org"
                className="bg-transparent outline-none w-full"
              />
            </div>

            {/* PASSWORD ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-gray-50">
                  <Lock size={18} className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    className="bg-transparent outline-none w-full"
                    placeholder="********"
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
                    className="bg-transparent outline-none w-full"
                    placeholder="********"
                  />
                </div>
              </div>
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-2 text-sm text-gray-500 mb-6">
              <input type="checkbox" className="mt-1" />
              <p>
                By creating an account, you agree to our
                <span className="text-blue-600 cursor-pointer">
                  {" "}
                  Terms of Service{" "}
                </span>
                and
                <span className="text-blue-600 cursor-pointer">
                  {" "}
                  Privacy Policy
                </span>
                .
              </p>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-medium transition">
              Create Account →
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-sm">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="grid grid-cols-2 gap-4">
              <button className="border rounded-lg py-3 hover:bg-gray-50">
                Google
              </button>

              <button className="border rounded-lg py-3 hover:bg-gray-50">
                SSO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 text-sm pb-6">
        © 2024 MedConnect Health Systems. All rights reserved.
      </footer>
    </div>
  );
}
