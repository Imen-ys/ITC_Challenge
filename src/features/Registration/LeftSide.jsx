import {  ShieldCheck, Users, BarChart3 } from "lucide-react";

function LeftSide() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-10 flex flex-col justify-between">
        <div>
            <h2 className="text-3xl font-bold text-gray-800 leading-snug">
            Join the future of <br />
            <span className="text-blue-700">Medical Healthcare.</span>
            </h2>

            <p className="text-gray-600 mt-4">
            Connect with specialists, manage patient records, and streamline your
            clinical workflow in one secure platform.
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
    );
    }

    export default LeftSide;
