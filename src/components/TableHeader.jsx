function TableHeader() {
  return (
    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
      <tr>
        <th className="py-3 px-6">Name</th>
        <th className="py-3 px-6">Provider</th>
        <th className="py-3 px-6">Category</th>
        <th className="py-3 px-6">Price</th>
        <th className="py-3 px-6">Action</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
