export default function Header() {
  return (
    <thead className="text-gray-500 border-b">
      <tr>
        <th className="text-left p-4">Full Name</th>
        <th>Patient ID</th>
        <th>Phone</th>
        <th>Last Visit</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}