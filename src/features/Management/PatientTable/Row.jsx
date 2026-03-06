import { Eye, FileText } from "lucide-react";
import {StatusBadge} from "./script";

export default function Row({ patient }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">
        <div className="font-medium">{patient.name}</div>
        <div className="text-gray-400 text-xs">{patient.email}</div>
      </td>

      <td>{patient.id}</td>
      <td>{patient.phone}</td>
      <td>{patient.visit}</td>

      <td>
        <StatusBadge status={patient.status} />
      </td>

      <td className="flex gap-3 justify-center py-4">
        <Eye size={18} className="text-gray-500 cursor-pointer" />
        <FileText size={18} className="text-gray-500 cursor-pointer" />
      </td>
    </tr>
  );
}