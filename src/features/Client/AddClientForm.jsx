import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Pencil,
  ShieldCheck,
  Mail,
  CheckCircle
} from "lucide-react";

const RegisterClientPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    notes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => setIsSubmitted(false), 3000);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-semibold text-gray-800 text-lg">ClientSphere</span>
            </div>
            
            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <span className="hidden sm:inline">Dashboard</span>
              </button>
              <button className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">
                <span className="hidden sm:inline">+ New Client</span>
                <span className="sm:hidden">+</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <span>Clients</span>
            <span>/</span>
            <span className="text-indigo-600 font-medium">New Registration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Register New Client</h1>
          <p className="text-gray-500 mt-2 text-base sm:text-lg">
            Complete the information below to create a new client profile in the system.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Form Header with Progress */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-6 sm:px-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Client Information</h2>
                <p className="text-indigo-100 mt-1">Fill in the details below</p>
              </div>
              {/* Progress Steps */}
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-white/50">1</div>
                  <span className="ml-2 text-white/80 text-sm hidden sm:inline">Details</span>
                </div>
                <div className="w-12 h-0.5 bg-white/20"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/60 font-semibold text-sm">2</div>
                  <span className="ml-2 text-white/60 text-sm hidden sm:inline">Verify</span>
                </div>
                <div className="w-12 h-0.5 bg-white/20"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/60 font-semibold text-sm">3</div>
                  <span className="ml-2 text-white/60 text-sm hidden sm:inline">Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10 space-y-8">
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Full Name */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2 text-indigo-500" />
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50/50 hover:bg-white focus:bg-white"
                    />
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-indigo-500" />
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50/50 hover:bg-white focus:bg-white"
                    />
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Address */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                    Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50/50 hover:bg-white focus:bg-white"
                    />
                    <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Pencil className="w-4 h-4 mr-2 text-indigo-500" />
                    Additional Notes
                  </label>
                  <div className="relative">
                    <textarea
                      name="notes"
                      rows="4"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50/50 hover:bg-white focus:bg-white resize-none"
                    />
                    <Pencil className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Verification Rule Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50/50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-900 text-lg mb-2">Verification Rule</h3>
                    <p className="text-indigo-700 text-sm leading-relaxed">
                      All new clients will receive an automated welcome email once the profile is created. 
                      This helps ensure immediate engagement and sets clear expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Privacy Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50/50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-900 text-lg mb-2">Data Privacy</h3>
                    <p className="text-indigo-700 text-sm leading-relaxed">
                      Client information is encrypted and follows the standard GDPR compliance protocols. 
                      Your data is protected with enterprise-grade security measures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-100">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4 sm:mb-0">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>All fields are required</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2 animate-bounce" />
                        Profile Created!
                      </>
                    ) : (
                      'Create Client Profile'
                    )}
                  </span>
                  {!isSubmitted && (
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 ClientSphere. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Success Toast Notification */}
      {isSubmitted && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-slide-up">
          <CheckCircle className="w-5 h-5" />
          <span>Client profile created successfully!</span>
        </div>
      )}
    </div>
  );
};

export default RegisterClientPage;