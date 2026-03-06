import { Header, Row, Footer } from "./script";

export default function PatientTable({ patients }) {
  return (
    <div className="bg-white rounded-xl shadow-sm mt-6 overflow-x-auto">
      <table className="w-full text-sm text-center">
        <Header />
        <tbody>
          {patients.map((p, idx) => (
            <Row key={idx} patient={p} />
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}