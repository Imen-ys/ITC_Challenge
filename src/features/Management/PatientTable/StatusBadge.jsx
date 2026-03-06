export default function StatusBadge({ status }) {

  const styles = {
    Stable: "bg-green-100 text-green-700",
    "Follow-up": "bg-yellow-100 text-yellow-700",
    "In Treatment": "bg-blue-100 text-blue-700",
    Urgent: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-3 py-1 text-sm rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}