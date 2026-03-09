export default function Footer() {
    return (
        <div className="flex justify-between items-center p-4 text-sm text-gray-500">
            <p>Showing 1 to 10 of 1,284 results</p>
            <div className="flex gap-2">
                <button className="px-3 py-1 border rounded">1</button>
                <button className="px-3 py-1 border rounded">2</button>
                <button className="px-3 py-1 border rounded">3</button>
            </div>
        </div>
    );
}