import { FaSearch, FaMoneyBillAlt ,FaBuilding } from "react-icons/fa";

const AllStock = () => {
  const stockItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    product: `Product ${i + 1}`,
    company: `Company ${i + 1}`,
    mrp: `$${(Math.random() * 100 + 50).toFixed(2)}`,
    rate: `$${(Math.random() * 80 + 30).toFixed(2)}`,
    stock: Math.floor(Math.random() * 50 + 1),
  }));

  return (
    <div className="shadow-md overflow-hidden">
      {/* Header Bar */}
      <h2 className="text-black font-semibold">All Stock</h2>
      <div className="bg-[#9C9191] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative flex items-center">
            <div className="p-2 h-9 bg-[#CFCFCF] ">
              <FaSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Search product..."
              className="pl-8 h-9 pr-3 py-1 border border-gray-300  w-64 focus:outline-none focus:ring-2 "
            />
          </div>

          {/* Discount Dropdown */}
          <div className="flex items-center">
            <div className="p-2 h-9 bg-[#CFCFCF] ">
              <FaMoneyBillAlt size={20} />
            </div>
            <select className="border h-9 border-gray-300 px-2 py-1 rounded bg-white">
              <option>Discount</option>
              <option>10%</option>
              <option>20%</option>
              <option>50%</option>
            </select>
          </div>

          {/* Company Dropdown */}
          <div className="flex items-center">
            <div className="p-2 h-9 bg-[#CFCFCF] ">
              <FaBuilding size={20} />
            </div>
            <select className="border h-9 border-gray-300 px-2 py-1 rounded bg-white w-40">
              <option>All Company</option>
              <option>Company A</option>
              <option>Company B</option>
              <option>Company C</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-black text-white text-left">
              <th className="px-4 py-2">Product Description</th>
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">MRP</th>
              <th className="px-4 py-2">Rate</th>
              <th className="px-4 py-2">Current Stock</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stockItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{item.product}</td>
                <td className="px-4 py-2">{item.company}</td>
                <td className="px-4 py-2">{item.mrp}</td>
                <td className="px-4 py-2">{item.rate}</td>
                <td className="px-4 py-2">{item.stock}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStock;
